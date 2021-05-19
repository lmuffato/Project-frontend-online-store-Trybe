export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesResponse = await fetchCategories.json();
  return categoriesResponse;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const id = categoryId;
  const url = `https:api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`;
  const searchBy = await fetch(url);
  const json = await searchBy.json();
  // console.log(json);
  return json;
}
