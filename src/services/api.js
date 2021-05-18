export async function getCategories() {
  return new Promise((resolve) => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((result) => result.json()
        .then((data) => resolve(data)));
  });
}

export async function getProductById(id) {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const requestObject = await request.json();
  return requestObject;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return new Promise((resolve) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((result) => result.json()
        .then((data) => resolve(data)));
  });
}
