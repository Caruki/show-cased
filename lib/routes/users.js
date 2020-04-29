const router = require('express').Router();
const User = require('../models/User');
// const verifyToken = require('./verifyToken');

// router.get('/', verifyToken, (request, response) => {
//   try {
//     response.send(request.user);
//   } catch (error) {
//     response.status(400).send(error.message);
//   }
// });

router.get('/:id', async (request, response) => {
  const userId = request.params.id;
  try {
    const user = await User.findById(userId);
    response.send(user);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.patch('/:id/towatch/add', async (request, response) => {
  const userId = request.params.id;
  const show = request.body;
  const showId = request.body.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { towatch: show },
        $pull: { watched: { id: showId } },
      },
      { new: true }
    );
    if (!updatedUser) {
      response.status(400).send('No user found!');
    }
    response.send(updatedUser);
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.patch('/:id/watched/add', async (request, response) => {
  const userId = request.params.id;
  const show = request.body;
  const showId = request.body.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { watched: show },
        pull: { towatch: { id: showId } },
      },
      { new: true }
    );
    if (!updatedUser) {
      response.status(400).send('No user found!');
    }
    response.send(updatedUser);
  } catch (error) {
    response.status(400).send(error.message);
  }
});

module.exports = router;