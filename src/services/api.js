export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let response;
  if (!categoryId) {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }
  if (!query) {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  }
  if (categoryId && query) {
    response = (
      await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`));
  }
  const data = await response.json();
  return data;
}
