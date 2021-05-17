export async function getCategories() {
  const request = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const categories = await request.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const product = await request.json();
  return product;
}

<<<<<<< HEAD
export async function getProductsByTerm(query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
=======
export async function getItemsByTerm(query) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
>>>>>>> 31afc135192dc219d799a9a6fd007c24d2dfb398
  const products = await request.json();
  return products;
}
