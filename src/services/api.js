export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((respo) => respo);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let respo = '';
  if (categoryId && query) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  }
  if (query) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }
  if (categoryId) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  }
  return respo.json();
}
