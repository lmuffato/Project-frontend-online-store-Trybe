export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const date = await response.json();
  return date;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const date = await response.json();
    return date;
  }

  if (query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const date = await response.json();
    return date;
  }

  if (categoryId) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const date = await response.json();
    return date;
  }
}
