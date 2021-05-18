const productsArray = [];

let cartObj = {
  title: '',
  thumbnail: '',
  thumbnailId: '',
  price: 0,
  buyQuantity: 1 };

export const addToLocalStorage = (storageArray) => {
  const myArrayStringfied = JSON.stringify(storageArray);
  localStorage.setItem('itens', myArrayStringfied);
};

export const getAll = () => {
  const element = localStorage.getItem('itens');
  const elementArray = JSON.parse(element);
  return elementArray;
};

export const quantityProduct = ({ target }) => {
  cartObj.buyQuantity = target.value;
  cartObj.price *= cartObj.buyQuantity;
  // { buyQuantity: target.value };
  // const { storageArray } = state;
  // addToLocalStorage(storageArray);
  // return storageArray;
};

export const creatObject = async (item) => {
  cartObj = {
    title: item.title,
    thumbnail: item.thumbnail,
    thumbnailId: item.thumbnail_id,
    price: item.price,
    buyQuantity: 1,
  };
  productsArray.push(cartObj);
  addToLocalStorage(productsArray);
};
