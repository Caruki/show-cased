const router = require('express').Router();
const {
  getTrendingShows,
  getNewestShows,
  getShowDetails,
} = require('../models/shows');

router.get('/trending', async (request, response) => {
  try {
    const trendingShows = await getTrendingShows();
    response.send(trendingShows);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get('/newest', async (request, response) => {
  try {
    const newestShows = await getNewestShows();
    response.send(newestShows);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get('/:id', async (request, response) => {
  try {
    const showId = request.params.id;
    const showDetails = await getShowDetails(showId);
    response.send(showDetails);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
