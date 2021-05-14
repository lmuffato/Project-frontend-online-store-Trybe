export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return products;
}
