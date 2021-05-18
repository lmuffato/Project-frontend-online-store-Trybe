const changePriceToNumber = (price) => Number(price.replace(/[^\d.]/g, ''));
export default changePriceToNumber;
