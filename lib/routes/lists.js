const router = require('express').Router();
const verifyToken = require('./verifyToken');

router.get('/', verifyToken, (request, response) => {
  try {
    response.json({
      posts: {
        title: 'my first post',
      },
    });
    // response.send(request.user);
  } catch (error) {
    response.status(400).send(error.message);
  }
});

module.exports = router;
