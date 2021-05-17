export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    if (!query) {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const data = await response.json();
      return data;
    }
    if (!categoryId) {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      const data = await response.json();
      return data;
    }
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
