import DefaultPicture from '../assets/default.png';

export async function searchShows(value) {
  const response = await fetch(`/api/shows/search?q=${value}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const searchResults = await response.json();
  const filteredSearchResults = searchResults.filter(
    (result) => result.airYear
  );
  console.log(filteredSearchResults);
  return filteredSearchResults;
}

export async function getTrendingShows() {
  const response = await fetch('/api/shows/trending', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const trendingShows = await response.json();
  return trendingShows;
}

export async function getNewestShows() {
  const response = await fetch('/api/shows/newest', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const newestShows = await response.json();
  return newestShows;
}

export async function getShowDetails(showId) {
  const response = await fetch(`/api/shows/${showId}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const showDetails = await response.json();
  showDetails.actors.map((actor) => {
    if (actor.picture === 'https://image.tmdb.org/t/p/w92null') {
      return (actor.picture = DefaultPicture);
    }
    return actor;
  });
  return showDetails;
}
