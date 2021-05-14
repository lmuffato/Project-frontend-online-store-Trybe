export async function getCategories() {
  const fecthed = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const fetchedJson = await fecthed.json();
  return fetchedJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const fetchCategoryAndQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const fetchCategoryAndQueryJson = await fetchCategoryAndQuery.json();
    return fetchCategoryAndQueryJson;
  }

  if (categoryId) {
    const fecthCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const fecthCategoryJson = await fecthCategory.json();
    return fecthCategoryJson;
  }
  const fecthQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const fetchQueryJson = await fecthQuery.json();
  return fetchQueryJson;
}
