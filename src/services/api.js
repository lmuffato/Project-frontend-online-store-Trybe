export async function getCategories() {
  // Implemente aqui
  const resolve = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await resolve.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const data = await resolve.json();
  return data;
}
