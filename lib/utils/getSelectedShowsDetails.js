const { getShowDetails } = require('../models/shows');

async function getSelectedShowsDetails(showIds) {
  const getMultipleShowsDetails = async () => {
    return Promise.all(
      showIds.map(async (showId) => {
        const showDetails = await getShowDetails(showId);
        return showDetails;
      })
    );
  };

  const showsDetails = await getMultipleShowsDetails();

  const selectedShows = showsDetails.map((show) => {
    return {
      id: show.id,
      poster: show.poster_portrait,
      title: show.title,
      genreIds: show.genreIds,
      genreNames: show.genreNames,
      networks: show.networks,
      actors: show.actors.map((actor) => {
        return actor.name;
      }),
    };
  });

  return selectedShows;
}

module.exports = { getSelectedShowsDetails };
