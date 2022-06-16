const API_URL = 'https://localhost';

export const categoryService = {
  createCategory,
  getAllCategories,
};

function handleError(error) {
  throw new Error(error);
}

async function createCategory(category) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  };
  try {
    const response = await fetch(`${API_URL}/category/create`, requestOptions);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
}

async function getAllCategories() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${API_URL}/categories`, requestOptions);
    return await response.data;
  } catch (error) {
    return handleError(error);
  }
}