export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // categoryId = ID de categoria do Mercado Livre
  // query = termo digitado pelo usuario;
  console.log(categoryId);
  console.log(query);
  const response = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = response.json();
  return data;
}
