const User = require('../models/User');
const fetch = require('node-fetch');

function calculateTopThree(dataArray1, dataArray2) {
  const dataArray1Reduced = dataArray1.reduce(function (array, element) {
    return array.concat(element);
  });
  const dataArray2Reduced = dataArray2.reduce(function (array, element) {
    return array.concat(element);
  });

  const joinedArrays = dataArray1Reduced.concat(dataArray2Reduced);

  const counts = {};
  joinedArrays.forEach(function (x) {
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
      const genres = show.genres.map((genre) => {
        return genre;
      });
      return genres;
    });

    const watchedListAllGenres = user.watched.map((show) => {
      const genres = show.genres.map((genre) => {
        return genre;
      });
      return genres;
    });

    const mostWatchedGenres = calculateTopThree(
      toWatchListAllGenres,
      watchedListAllGenres
    );
    return mostWatchedGenres;
  }
}

async function getMostWatchedActors(userId) {
  const user = await User.findById(userId);
  if (!user) {
    return 'User not found';
  } else if (!user.towatch || !user.watched) {
    return null;
  } else {
    const toWatchListAllActors = user.towatch.map((show) => {
      const genres = show.actors.map((genre) => {
        return genre;
      });
      return genres;
    });

    const watchedListAllActors = user.watched.map((show) => {
      const genres = show.actors.map((genre) => {
        return genre;
      });
      return genres;
    });

    const mostWatchedActors = calculateTopThree(
      toWatchListAllActors,
      watchedListAllActors
    );

    return mostWatchedActors;
  }
}

async function getRecsByGenres(userId) {
  const genres = await getMostWatchedGenres(userId);
  const response = await fetch(
    ` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genres[0]}%2C${genres[1]}%2C${genres[2]}&include_null_first_air_dates=false`
  );
  const unfilteredRecs = await response.json();
  return unfilteredRecs;
}

async function getRecsByActors(userId) {
  const actors = getMostWatchedActors(userId);
  return actors;
}

module.exports = { getRecsByGenres, getRecsByActors };
