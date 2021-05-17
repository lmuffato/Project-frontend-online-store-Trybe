export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await data.json();
  return categories;
}

export async function getProductsFromCategory(category) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
  const querycategory = await data.json();
  return querycategory;
}

export async function getProductsFromCategoryAndQuery(category, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`);
  const querycategory = await data.json();
  return querycategory;
}
