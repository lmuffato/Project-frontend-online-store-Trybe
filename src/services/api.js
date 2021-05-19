export async function getCategories() {
  const resolve = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await resolve.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await resolve.json();
  return data;
}
