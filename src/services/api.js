export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(url);
  const categories = await data.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId && categoryId !== 1) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }

  if (query && query !== 1) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }

  const data = await fetch(url);
  const categories = await data.json();
  return categories;
}

export default getProductsFromCategoryAndQuery;
