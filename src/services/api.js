// const fetch = require('node-fetch');

export async function getCategories() {
  const resolve = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await resolve.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((categ) => categ.json())
      .then((finalData) => { const result = finalData; return result; });
  }
  if (categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`)
      .then((categ) => categ.json())
      .then((finalData) => { const result = finalData; return result; });
  }
}
