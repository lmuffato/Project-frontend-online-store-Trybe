export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await data.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const dataRequery = await fetch(url);
  const result = await dataRequery.json();
  return result;
}

export async function getQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const dataQuery = await fetch(url);
  const result = await dataQuery.json();
  return result;
}

export async function getCategoryId(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const dataCategory = await fetch(url);
  const result = await dataCategory.json();
  return result;
}
