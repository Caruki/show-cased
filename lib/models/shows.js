const fetch = require('node-fetch');

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
    '-0' +
    (currentDate.getMonth() + 2) +
    '-' +
    currentDate.getDate();
  const airDateGTE =
    currentDate.getFullYear() +
    '-0' +
    (currentDate.getMonth() - 1) +
    '-' +
    currentDate.getDate();
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
    poster: `https://image.tmdb.org/t/p/w780${show.images.backdrops[0].file_path}`,
    rating: show.vote_average,
    genres_id: show.genres.map((genre) => {
      return genre.id;
    }),
    genres_name: show.genres.map((genre) => {
      return genre.name;
    }),
    networks: show.networks,
    overview: show.overview,
    trailer: `https://www.youtube.com/watch?v=${videos.results[0].key}`,
    actors: credits.cast.map((actor) => {
      return {
        name: actor.name,
        picture: `https://image.tmdb.org/t/p/w92${actor.profile_path}`,
      };
    }),
  };
  return neededShowDetails;
}

module.exports = { getTrendingShows, getNewestShows, getShowDetails };
