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

// export const quantityProduct = ({ target }) => {
//   const allProducts = getAll().map((product) => {
//     // let targetValue = 0;
//     if (target.name === 'add') {
//       product.buyQuantity += 1;
//       target.previousSibling.defaultValue = product.buyQuantity;
//       console.log(target.previousSibling.defaultValue);
//     }
//     if (target.name === 'sub') {
//       product.buyQuantity -= 1;
//       target.previousSibling.defaultValue = product.buyQuantity;
//       console.log(product.buyQuantity);
//     }
//     if (product.title === target.id) {
//       product.buyQuantity = target.value;
//       product.price = product.standardPrice * parseInt(product.buyQuantity, 10);
//     }
//     return product;
//   });
//   addToLocalStorage(allProducts);

//   // console.log(allProducts);
// };

export const creatObject = async (item) => {
  cartObj = {
    title: item.title,
    thumbnail: item.thumbnail,
    thumbnailId: item.thumbnail_id,
    standardPrice: item.price,
    price: item.price,
    buyQuantity: 1,
    availableQuantity: item.available_quantity,
  };
  productsArray.push(cartObj);
  addToLocalStorage(productsArray);
};
