const fetchProduct = (id) => fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json());

export default fetchProduct;
