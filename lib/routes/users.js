const router = require('express').Router();
const User = require('../models/User');
const {
  getPaginatedRecsByGenres,
  getPaginatedRecsByNetworks,
} = require('../models/recs');
const { getSelectedShowsDetails } = require('../utils/getSelectedShowsDetails');
const { updateUserWatchList } = require('../utils/updateUserWatchList');
const verifyToken = require('./verifyToken');

router.get('/', verifyToken, (request, response) => {
  try {
    response.send(request.user);
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.get('/:id', async (request, response) => {
  const userId = request.params.id;
  try {
    const user = await User.findById(userId);
    response.send(user);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get('/:id/towatch', async (request, response) => {
  const userId = request.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      response.status(404).send('No user found!');
    } else {
      const toWatchList = user.towatch;
      response.send(toWatchList);
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.post('/:id/towatch', async (request, response) => {
  const userId = request.params.id;
  const watchlistAdd = 'towatch';
  const watchlistPull = 'watched';
  try {
    if (Array.isArray(request.body)) {
      const showIds = request.body;
      const shows = await getSelectedShowsDetails(showIds);
      const updatedUser = await updateUserWatchList({
        shows,
        userId,
        watchlistAdd,
      });
      if (updatedUser) {
        response.send(updatedUser.towatch);
      } else {
        response.status(404).send('No user found!');
      }
    } else {
      const show = request.body;
      const showId = request.body.id;
      const updatedUser = await updateUserWatchList({
        showId,
        show,
        userId,
        watchlistAdd,
        watchlistPull,
      });
      if (updatedUser) {
        response.send(updatedUser.towatch);
      } else {
        response.status(404).send('No user found!');
      }
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.delete('/:id/towatch', async (request, response) => {
  const userId = request.params.id;
  const showId = request.body.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { towatch: { id: showId } },
      },
      { new: true }
    );
    if (updatedUser) {
      response.send(updatedUser.towatch);
    } else {
      response.status(404).send('No user found!');
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.get('/:id/watched', async (request, response) => {
  const userId = request.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      response.status(404).send('No user found!');
    } else {
      const watchedList = user.watched;
      response.send(watchedList);
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.post('/:id/watched', async (request, response) => {
  const userId = request.params.id;
  const watchlistAdd = 'watched';
  const watchlistPull = 'towatch';
  try {
    if (Array.isArray(request.body)) {
      const showIds = request.body;
      const shows = await getSelectedShowsDetails(showIds);
      const updatedUser = await updateUserWatchList({
        shows,
        userId,
        watchlistAdd,
      });
      if (updatedUser) {
        response.send(updatedUser.watched);
      } else {
        response.status(404).send('No user found!');
      }
    } else {
      const show = request.body;
      const showId = request.body.id;
      const updatedUser = await updateUserWatchList({
        showId,
        show,
        userId,
        watchlistAdd,
        watchlistPull,
      });
      if (updatedUser) {
        response.send(updatedUser.watched);
      } else {
        response.status(404).send('No user found!');
      }
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.delete('/:id/watched', async (request, response) => {
  const userId = request.params.id;
  const showId = request.body.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { watched: { id: showId } },
      },
      { new: true }
    );
    if (updatedUser) {
      response.send(updatedUser.watched);
    } else {
      response.status(404).send('No user found!');
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.get('/:id/recs/genres/:pageNumber', async (request, response) => {
  const userId = request.params.id;
  const pageNumber = request.params.pageNumber;
  try {
    const { recs, maxPageReached } = await getPaginatedRecsByGenres(
      userId,
      pageNumber
    );
    response.send({ recs, maxPageReached });
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get('/:id/recs/networks/:pageNumber', async (request, response) => {
  const userId = request.params.id;
  const pageNumber = request.params.pageNumber;
  try {
    const { recs, maxPageReached } = await getPaginatedRecsByNetworks(
      userId,
      pageNumber
    );
    response.send({ recs, maxPageReached });
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
