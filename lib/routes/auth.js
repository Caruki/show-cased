const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateRegistration, validateLogin } = require('../validation');

router.post('/register', async (request, response) => {
  try {
    const { username, email, password } = request.body;
    const { error } = validateRegistration(request.body);

    if (error) return response.status(403).send(error.message);

    const emailExists = Boolean(await User.findOne({ email: email }));
    const usernameCheck = Boolean(await User.findOne({ username: username }));
    if (emailExists) return response.status(400).send('E-mail already exists');
    if (usernameCheck)
      return response.status(400).send('This username is already taken');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    response.send({ userId: createdUser._id });
  } catch (error) {
    response.status(400).send('Everything failed');
  }
});

router.post('/login', async (request, response) => {
  const { email, password } = request.body;
  const cookieOptions = {
    sameSite: true,
    httpOnly: true,
  };

  try {
    const { error } = validateLogin(request.body);

    if (error) return response.status(403).send(error.message);
    const user = await User.findOne({ email: email });
    if (!user) return response.status(400).send('E-mail or Password is wrong');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return response.status(400).send('Invalid password!');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    response
      .cookie('access_token', token, cookieOptions)
      .status(200)
      .send('Logged in!');
  } catch (error) {
    return response.error.message;
  }
});

module.exports = router;
