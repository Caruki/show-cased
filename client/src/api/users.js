export async function createUser(userInformation) {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInformation),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const createdUser = await response.json();
  return createdUser;
}

export async function authUser(userInformation) {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInformation),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const userToken = await response.text();
  return userToken;
}
