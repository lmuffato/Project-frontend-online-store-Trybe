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

export const checkStorage = () => {
  const storage = getAll();
  let storageData = '';
  if (Array.isArray(storage)) {
    storageData = storage;
    return storageData;
    // this.setState({
    //   storageData: storage,
    //   array: true,
    // });
  }
  if (storage !== null) {
    const storageArray = [storage];
    storageData = storageArray;
    return storageData;
    // return this.setState({
    //   storageData: storageArray,
    //   array: true,
    // });
  }
  return storageData;
};

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
