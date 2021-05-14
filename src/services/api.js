export async function getCategories() {
  const fetchApiCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resolve = await fetchApiCategories.json();
  return resolve;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  const fetchApiQuery = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY');
  const resolve = await fetchApiQuery.json();
  return resolve;
}
