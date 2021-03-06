const fetch = require('node-fetch');

async function searchShows(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
  );
  const searchResults = await response.json();
  const searchResultsList = searchResults.results.map((show) => {
    const searchResult = {
      id: show.id,
      title: show.name,
      airYear: show.first_air_date ? show.first_air_date.slice(0, 4) : null,
    };
    return searchResult;
  });
  return searchResultsList;
}

async function getTrendingShows() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
  );
  const trendingShows = await response.json();
  const trendingShowsListView = trendingShows.results.map((show) => {
    const trendingShowListView = {
      id: show.id,
      title: show.name,
      poster: `https://image.tmdb.org/t/p/w154${show.poster_path}`,
      rating: Math.floor(show.vote_average),
    };
    return trendingShowListView;
  });
  return trendingShowsListView;
}

async function getNewestShows() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const airDateLTE =
    currentDate.getFullYear() +
    (currentDate.getMonth() + 2 <= 9 ? '-0' : '-') +
    (currentDate.getMonth() + 2) +
    (currentDate.getDate() <= 9 ? '-0' : '-') +
    currentDate.getDate();
  const airDateGTE =
    currentDate.getFullYear() +
    (currentDate.getMonth() - 1 <= 9 ? '-0' : '-') +
    (currentDate.getMonth() - 1) +
    (currentDate.getDate() <= 9 ? '-0' : '-') +
    currentDate.getDate();

  console.log(airDateGTE, airDateLTE);

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&air_date.gte=${airDateGTE}&air_date.lte=${airDateLTE}&first_air_date_year=${currentYear}&page=1&vote_average.gte=7&include_null_first_air_dates=false&with_original_language=en`
  );
  const newestShows = await response.json();

  const newestShowsListView = newestShows.results.map((show) => {
    const newestShowListView = {
      id: show.id,
      title: show.name,
      poster: `https://image.tmdb.org/t/p/w154${show.poster_path}`,
      rating: Math.floor(show.vote_average),
    };
    return newestShowListView;
  });
  return newestShowsListView;
}

async function getShowDetails(showId) {
  const responses = await Promise.all([
    fetch(`
    https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=images`),
    fetch(`
    https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${process.env.TMDB_API_KEY}`),
    fetch(`
    https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${process.env.TMDB_API_KEY}`),
  ]);
  const [show, credits, videos] = await Promise.all(
    responses.map((response) => response.json())
  );

  const neededShowDetails = {
    id: show.id,
    title: show.name,
    poster_portrait: `https://image.tmdb.org/t/p/w154${show.poster_path}`,
    poster_landscape: `https://image.tmdb.org/t/p/w780${
      show.images.backdrops.length > 0
        ? show.images.backdrops[0].file_path
        : null
    }`,
    rating: show.vote_average,
    genreIds: show.genres.map((genre) => {
      return genre.id;
    }),
    genreNames: show.genres.map((genre) => {
      return genre.name;
    }),
    networks: show.networks,
    overview: show.overview,
    trailer: `https://www.youtube.com/watch?v=${
      videos.results.length > 0 ? videos.results[0].key : null
    }`,
    actors: credits.cast.map((actor) => {
      return {
        name: actor.name,
        picture: `https://image.tmdb.org/t/p/w92${actor.profile_path}`,
      };
    }),
  };
  return neededShowDetails;
}

module.exports = {
  getTrendingShows,
  getNewestShows,
  getShowDetails,
  searchShows,
};
