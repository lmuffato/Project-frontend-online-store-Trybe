export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await request.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const requestQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  // const requestId = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  // const dataId = await requestId.json();
  // const dataQuery = await requestQuery.json();
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await request.json();

  return data;
}
