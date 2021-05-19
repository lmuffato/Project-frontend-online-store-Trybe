import React from 'react';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import * as storageFunction from '../services/localStorage';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      storage: false,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage = () => {
    const products = storageFunction.getProductsFromStorage();
    if (products.length > 0) {
      this.setState({ storage: true });
    }
    this.setState({
      products,
    });
    this.sumPrices(products);
  }

  sumPrices = (products) => {
    const totalPrice = products.reduce((acc, cur) => acc + cur.price, 0);
    this.setState({ totalPrice });
  }

  handleOnChange = (id, totalPrice) => {
    const products = storageFunction.getProductsFromStorage();
    const productObject = products.find((product) => product.id === id);
    productObject.price = totalPrice;
    this.sumPrices(products);
  }

  render() {
    const { storage, products, totalPrice } = this.state;
    return (
      <div>
        {!storage && <EmptyCart />}
        { storage && products.map((product) => (
          <CartItem
            key={ product.id }
            product={ product }
            onChange={ this.handleOnChange }
          />
        )) }
        <p>{`Preço total: ${totalPrice}`}</p>
      </div>
    );
  }
}

export default Cart;
