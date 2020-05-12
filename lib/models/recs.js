const User = require('../models/User');
const fetch = require('node-fetch');

function flatten(array) {
  return array.reduce(function (array, element) {
    return array.concat(element);
  });
}

function flattenAndConcat(array1, array2) {
  const flattenedArray1 = flatten(array1);

  const flattenedArray2 = flatten(array2);

  return flattenedArray1.concat(flattenedArray2);
}

function calculateTopThree(array) {
  const counts = {};
  array.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const keysSortedDesc = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a];
  });

  const topThreeKeys = [
    keysSortedDesc[0],
    keysSortedDesc[1],
    keysSortedDesc[2],
  ];
  return topThreeKeys;
}

async function getMostWatchedGenres(userId) {
  const user = await User.findById(userId);
  if (!user) {
    return 'User not found';
  } else if (!user.towatch.length || !user.watched.length) {
    return null;
  } else {
    const toWatchListAllGenres = user.towatch.map((show) => {
      return show.genreIds;
    });

    const watchedListAllGenres = user.watched.map((show) => {
      return show.genreIds;
    });

    const allGenres = flattenAndConcat(
      toWatchListAllGenres,
      watchedListAllGenres
    );

    const mostWatchedGenres = calculateTopThree(allGenres);
    return mostWatchedGenres;
  }
}

async function getMostWatchedNetworks(userId) {
  const user = await User.findById(userId);
  if (!user) {
    return 'User not found';
  } else if (!user.towatch.length || !user.watched.length) {
    return null;
  } else {
    const toWatchListAllNetworks = user.towatch.map((show) => {
      const networks = show.networks.map((network) => {
        return network.id;
      });
      return networks;
    });

    const watchedListAllNetworks = user.watched.map((show) => {
      const networks = show.networks.map((network) => {
        return network.id;
      });
      return networks;
    });
    const allNetworks = flattenAndConcat(
      toWatchListAllNetworks,
      watchedListAllNetworks
    );

    const mostWatchedNetworks = calculateTopThree(allNetworks);

    return mostWatchedNetworks;
  }
}

async function getAllWatchlistShows(userId) {
  const user = await User.findById(userId);
  const toWatchListAllShowsById = user.towatch.map((show) => {
    return show.id;
  });

  const watchedListAllShowsById = user.watched.map((show) => {
    return show.id;
  });

  const allWatchListShowsById = toWatchListAllShowsById.concat(
    watchedListAllShowsById
  );
  return allWatchListShowsById;
}

async function getRecsFromAPI(data, userId, filter, operator, pageNumber) {
  const response = await fetch(
    ` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&first_air_date.gte=2010-01-01&page=${pageNumber}&timezone=America%2FNew_York&with_${filter}=${data[0]}${operator}${data[1]}${operator}${data[2]}&include_null_first_air_dates=false`
  );
  const unfilteredRecs = await response.json();
  const totalPages = unfilteredRecs.total_pages.toString();
  const unfilteredRecsListView = unfilteredRecs.results.map((show) => {
    const unfilteredRecsListView = {
      id: show.id,
      title: show.name,
      poster: `https://image.tmdb.org/t/p/w154${show.poster_path}`,
      rating: Math.floor(show.vote_average),
    };
    return unfilteredRecsListView;
  });

  const unfilteredRecsById = unfilteredRecs.results.map((result) => {
    return result.id;
  });
  const watchListShowsById = await getAllWatchlistShows(userId);
  const filteredRecsById = unfilteredRecsById.filter(
    (show) => !watchListShowsById.includes(show)
  );
  const filteredRecsListView = unfilteredRecsListView.filter((show) =>
    filteredRecsById.includes(show.id)
  );

  return {
    recs: filteredRecsListView,
    maxPageReached: pageNumber === totalPages,
  };
}

async function getPaginatedRecsByGenres(userId, pageNumber) {
  const genres = await getMostWatchedGenres(userId);
  if (genres) {
    const filter = 'genres';
    const operator = '%2C';
    const { recs, maxPageReached } = await getRecsFromAPI(
      genres,
      userId,
      filter,
      operator,
      pageNumber
    );
    return { recs, maxPageReached };
  } else return { recs: [], maxPageReached: true };
}

async function getPaginatedRecsByNetworks(userId, pageNumber) {
  const networks = await getMostWatchedNetworks(userId);
  if (networks) {
    const filter = 'networks';
    const operator = '%7C';
    const { recs, maxPageReached } = await getRecsFromAPI(
      networks,
      userId,
      filter,
      operator,
      pageNumber
    );
    return { recs, maxPageReached };
  } else return { recs: [], maxPageReached: true };
}

module.exports = { getPaginatedRecsByGenres, getPaginatedRecsByNetworks };
