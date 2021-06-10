export async function getCategories() {
  const categories = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );

  const response = categories.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = categories.json();

  return response;
}
