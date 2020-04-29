export async function addToWatchList(userId, show) {
  const response = await fetch(`/api/users/${userId}/towatch/add`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(show),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function removeFromWatchList(userId, show) {
  const response = await fetch(`/api/users/${userId}/towatch/remove`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(show),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function addToWatchedList(userId, show) {
  const response = await fetch(`/api/users/${userId}/watched/add`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(show),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function removeFromWatchedList(userId, show) {
  const response = await fetch(`/api/users/${userId}/watched/remove`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(show),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}
