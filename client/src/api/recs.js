export async function getRecsByGenres(key, userId) {
  const response = await fetch(`/api/users/${userId}/recs/genres`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const recsByGenres = await response.json();
  return recsByGenres;
}

export async function getRecsByNetworks(key, userId) {
  const response = await fetch(`/api/users/${userId}/recs/networks`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const recsByNetworks = await response.json();
  return recsByNetworks;
}
