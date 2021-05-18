export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(endpoint);
  const categories = await request.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const request = await fetch(endpoint);
  const products = await request.json();
  return products;
}

export async function getProductsFromQuery(query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const request = await fetch(endpoint);
  const products = await request.json();
  return products;
}
