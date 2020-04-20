const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { validateRegistration, validateLogin } = require('../validation');

router.post('/register', async (request, response) => {
  const { error } = validateRegistration(request.body);

  if (error) return response.status(403).send(error.message);

  const emailCheck = await User.findOne({ email: request.body.email });
  const usernameCheck = await User.findOne({ username: request.body.username });
  if (emailCheck) return response.status(400).send('E-mail already exists');
  if (usernameCheck)
    return response.status(400).send('This username is already taken');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    username: request.body.username,
    email: request.body.email,
    password: hashedPassword,
  });

  try {
    const dummyUser = await user.save();
    response.send({ User: dummyUser._id });
  } catch (error) {
    response.status(400).send(error);
  }
});

router.post('/login', async (request, response) => {
  try {
    const { error } = validateLogin(request.body);

    if (error) return response.status(403).send(error.message);
    const user = await User.findOne({ email: request.body.email });
    if (!user) return response.status(400).send('E-mail or Password is wrong');

    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );
    if (!validPassword) return response.status(400).send('Invalid password!');
    response.send('Successfully logged in!');
  } catch (error) {
    return response.error.message;
  }
});

module.exports = router;
