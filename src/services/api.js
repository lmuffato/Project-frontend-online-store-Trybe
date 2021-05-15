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
}

export async function getCategoryById(categoryId) {
  return (
    await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
    )
  ).json();
}

export async function getProductsFromQuery(query) {
  return (
    await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  ).json();
}
