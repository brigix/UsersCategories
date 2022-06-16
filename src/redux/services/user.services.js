const API_URL = 'https://localhost';

export const userService = {
  createUser,
  getUsersByCategory
};

function handleError(error) {
  throw new Error(error);
}

async function createUser(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(`${API_URL}/user/create`, requestOptions);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
}

async function getUsersByCategory(category) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: category,
  };
  try {
    const response = await fetch(`${API_URL}/usersList/${category}`, requestOptions);
    return await response.user;
  } catch (error) {
    return handleError(error);
  }
} 
