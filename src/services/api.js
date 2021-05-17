export async function getCategories() {
  const request = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const categories = await request.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const product = await request.json();
  return product;
}

export async function getItemsByTerm(query) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  const products = await request.json();
  return products;
}
