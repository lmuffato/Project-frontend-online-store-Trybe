export async function getCategories() {
  const fetchApiCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resolve = await fetchApiCategories.json();
  return resolve;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId && query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const fetchApiQuery = await fetch(url);
  const resolve = await fetchApiQuery.json();
  return resolve;
}
