export async function getCategories() {
  return (
    await fetch('https://api.mercadolibre.com/sites/MLB/categories')
  ).json();
}

export async function getProductsFromCategoryAndQuery(...props) {
  const [searchText, categoryId] = props;
  if (searchText && categoryId) {
    return (
      await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${searchText}`,
      )
    ).json();
  }
  if (searchText) {
    return (
      await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchText}`)
    ).json();
  }
  return (
    await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
    )
  ).json();
}
