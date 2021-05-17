export async function getCategories() {
  console.log('x');
  const fetchApiCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  console.log(fetchApiCategories);
  const resolve = await fetchApiCategories.json();
  return resolve;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId && query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  if (categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  if (query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const fetchApiQuery = await fetch(url);
  const resolve = await fetchApiQuery.json();
  return resolve;
}
