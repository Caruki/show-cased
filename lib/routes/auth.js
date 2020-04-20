const router = require('express').Router();
const User = require('../models/User');
const { validateRegistration } = require('../validation');

router.post('/register', async (request, response) => {
  const { error } = validateRegistration(request.body);

  if (error) return response.status(403).send(error.message);

  const emailCheck = await User.findOne({ email: request.body.email });
  const usernameCheck = await User.findOne({ username: request.body.username });
  if (emailCheck) return response.status(400).send('E-mail already exists');
  if (usernameCheck)
    return response.status(400).send('This username is already taken');

  const user = new User({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });

  try {
    const dummyUser = await user.save();
    response.send(dummyUser);
  } catch (error) {
    response.status(400).send(error);
  }
});

router.post('/login', async (request, response) => {
  try {
    response.json('Login please');
  } catch (error) {
    console.log(error.status, error.message);
  }
});

module.exports = router;
