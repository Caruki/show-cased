import React from 'react';
import { getTrendingShows } from '../api/shows';

function Popular() {
  async function fetchTrendingShows() {
    const response = await getTrendingShows();
    const trendingShows = response.json();
    return trendingShows;
  }

  const trendingShows = fetchTrendingShows();
  console.log('onpage:', trendingShows);

  return (
    <input placeholder="Hello" />
    // <ul>
    //   {trendingShows &&
    //     trendingShows.map((show) => <li key={show.id}>{show}</li>)}
    // </ul>
  );
}

export default Popular;
