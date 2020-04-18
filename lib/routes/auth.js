const router = require('express').Router();

router.post('/register', async (request, response) => {
  try {
    response.json('Register now');
  } catch (error) {
    console.log(error.status, error.message);
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
