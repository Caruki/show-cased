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
      return (actor.picture = '');
    }
    return actor;
  });
  return showDetails;
}
