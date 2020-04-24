const router = require('express').Router();
const getTrendingShows = require('../models/shows');

router.get('/trending', async (request, response) => {
  try {
    const trendingShows = await getTrendingShows();
    response.send(trendingShows);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
