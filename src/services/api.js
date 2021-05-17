export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((respo) => respo);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let respo = [];
  if (categoryId && query) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    console.log('Os 2');
    return respo.json();
  }

  if (query) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    console.log('Query');
    return respo.json();
  }
  if (categoryId) {
    respo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    console.log('Category');
    return respo.json();
  }
}
