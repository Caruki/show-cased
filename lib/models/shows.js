const fetch = require('node-fetch');

async function getTrendingShows() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
    );
    const trendingShows = response.json();
    // const trendingShowsListView = trendingShows.results.map((show) => {
    //   const trendingShowListView = {
    //     id: show.id,
    //     key: show.id,
    //     title: show.name,
    //     poster: show.poster_path,
    //     rating: show.vote_average,
    //   };
    //   return trendingShowListView;
    // });
    return trendingShows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTrendingShows;
