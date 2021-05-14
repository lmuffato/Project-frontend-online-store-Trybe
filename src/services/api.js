export async function getCategories() {
  return (
    await fetch('https://api.mercadolibre.com/sites/MLB/categories')
  ).json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query && categoryId) {
    return (
      await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
      )
    ).json();
  }
  if (categoryId) {
    return (
      await fetch(
        `https://api.mercadolibre.com/sites/MLB/categories/${categoryId}`,
      )
    ).json();
  }
  return (
    await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  ).json();
}
