export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((data) => data.json());
  return products;
}

export async function getProductsFromId(id) {
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((data) => data.json());
  return product;
}
