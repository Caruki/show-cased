export async function getPaginatedRecsByGenres(key, userId, pageNumber) {
  const response = await fetch(
    `/api/users/${userId}/recs/genres/${pageNumber}`,
    {
      method: 'GET',
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  if (response.status === 404) {
    throw new Error(404, response.statusText);
  }
  const { recs, maxPageReached } = await response.json();
  return { recs, maxPageReached };
}

export async function getPaginatedRecsByNetworks(key, userId, pageNumber) {
  const response = await fetch(
    `/api/users/${userId}/recs/networks/${pageNumber}`,
    {
      method: 'GET',
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  if (response.status === 404) {
    throw new Error(404, response.statusText);
  }
  const { recs, maxPageReached } = await response.json();
  return { recs, maxPageReached };
}
