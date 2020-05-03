export async function getRecsByGenres(key, userId, pageNumber) {
  const response = await fetch(
    `/api/users/${userId}/recs/genres/${pageNumber}`,
    {
      method: 'GET',
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const recsByGenres = await response.json();
  return recsByGenres;
}

export async function getMaxPageRecsByGenres(key, userId) {
  const response = await fetch(`/api/users/${userId}/recs/genres/`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const maxPageRecsByGenres = await response.json();
  return maxPageRecsByGenres;
}

export async function getRecsByNetworks(key, userId, pageNumber) {
  const response = await fetch(
    `/api/users/${userId}/recs/networks/${pageNumber}`,
    {
      method: 'GET',
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const recsByNetworks = await response.json();
  return recsByNetworks;
}

export async function getMaxPageRecsByNetworks(key, userId) {
  const response = await fetch(`/api/users/${userId}/recs/networks/`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const maxPageRecsByNetworks = await response.json();
  return maxPageRecsByNetworks;
}
