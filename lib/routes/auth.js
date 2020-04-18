const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (request, response) => {
  try {
    const user = new User({
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
    });
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
