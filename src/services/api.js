export async function getCategories() {
  const resolve = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await resolve.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let respo = [];
  if (categoryId && query) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    return respo.json();
  }

  if (query) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return respo.json();
  }
  if (categoryId) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    return respo.json();
  }
}
