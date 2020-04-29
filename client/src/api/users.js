export async function registerUser(userInformation) {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInformation),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const createdUserId = await response.json();
  return createdUserId;
}

export async function loginUser(userInformation) {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInformation),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const user = await response.json();
  return user;
}

export async function logoutUser() {
  const response = await fetch('/api/users/logout', {
    method: 'GET',
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const confirmation = await response.json();
  return confirmation;
}

export async function getUser(userId) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'GET',
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const user = await response.json();
  return user;
}
