export async function addToWatchList(userId, show) {
  const response = await fetch(`/api/users/${userId}/towatch`, {
    method: 'POST',
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
  const response = await fetch(`/api/users/${userId}/watched`, {
    method: 'POST',
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
