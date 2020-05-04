export async function addToWatchList({ userId, selectedShow }) {
  const response = await fetch(`/api/users/${userId}/towatch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(selectedShow),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function removeFromToWatchList({ userId, selectedShow }) {
  const response = await fetch(`/api/users/${userId}/towatch`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(selectedShow),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function addToWatchedList({ userId, selectedShow }) {
  const response = await fetch(`/api/users/${userId}/watched`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(selectedShow),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function removeFromWatchedList({ userId, selectedShow }) {
  const response = await fetch(`/api/users/${userId}/watched`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(selectedShow),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function getToWatchList(key, userId) {
  const response = await fetch(`/api/users/${userId}/towatch`, {
    method: 'GET',
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const towatchList = await response.json();
  return towatchList;
}

export async function getWatchedList(key, userId) {
  const response = await fetch(`/api/users/${userId}/watched`, {
    method: 'GET',
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const watchedList = await response.json();
  return watchedList;
}
