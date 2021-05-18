const ML_URL = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  const endpoint = `${ML_URL}categories`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `${ML_URL}search?category=${categoryId}&q=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}
