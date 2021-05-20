export const changePriceToNumber = (price) => Number(price.replace(/[^\d.]/g, ''));
export const getProductLength = (cartList) => cartList
  .reduce((acc, product) => acc + product.quant, 0);
