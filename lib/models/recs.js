const User = require('../models/User');
const fetch = require('node-fetch');

function calculateTopThree(toWatchListArraysInArray, watchedListArraysInArray) {
  const toWatchListArray = toWatchListArraysInArray.reduce(function (
    array,
    element
  ) {
    return array.concat(element);
  });
  const watchedListArray = watchedListArraysInArray.reduce(function (
    array,
    element
  ) {
    return array.concat(element);
  });

  const watchListArray = toWatchListArray.concat(watchedListArray);

  const counts = {};
  watchListArray.forEach(function (x) {
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
  } else if (!user.towatch || !user.watched) {
    return null;
  } else {
    const toWatchListAllGenres = user.towatch.map((show) => {
      return show.genreIds;
    });

    const watchedListAllGenres = user.watched.map((show) => {
      return show.genreIds;
    });

    const mostWatchedGenres = calculateTopThree(
      toWatchListAllGenres,
      watchedListAllGenres
    );
    return mostWatchedGenres;
  }
}

async function getMostWatchedNetworks(userId) {
  const user = await User.findById(userId);
  if (!user) {
    return 'User not found';
  } else if (!user.towatch || !user.watched) {
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

    const mostWatchedNetworks = calculateTopThree(
      toWatchListAllNetworks,
      watchedListAllNetworks
    );

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

async function getRecsFromAPI(data, userId, filter) {
  const response = await fetch(
    ` https://api.themoviedb.org/3/discover/tv?api_key=${
      process.env.TMDB_API_KEY
    }&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_${filter}=${
      data[0]
    }${filter === 'genres' ? '%2C' : '%7C'}${data[1]}${
      filter === 'genres' ? '%2C' : '%7C'
    }${data[2]}&include_null_first_air_dates=false`
  );
  const unfilteredRecs = await response.json();
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
  return filteredRecsListView;
}

async function getRecsByGenres(userId) {
  const genres = await getMostWatchedGenres(userId);
  const filter = 'genres';
  const recsByGenres = await getRecsFromAPI(genres, userId, filter);
  return recsByGenres;
}

async function getRecsByNetworks(userId) {
  const networks = await getMostWatchedNetworks(userId);
  const filter = 'networks';
  const recsByNetworks = await getRecsFromAPI(networks, userId, filter);
  return recsByNetworks;
}

module.exports = { getRecsByGenres, getRecsByNetworks };
