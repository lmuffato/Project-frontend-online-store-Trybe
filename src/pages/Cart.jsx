import React from 'react';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      storage: false,
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products !== null) {
      this.setState({ storage: true });
    }
    this.setState({
      products,
    });
  }

  render() {
    const { storage, products } = this.state;
    return (
      <div>
        {!storage && <EmptyCart />}
        { storage && products.map((product) => (
          <CartItem key={ product.id } product={ product } />
        )) }
      </div>
    );
  }
}

export default Cart;
