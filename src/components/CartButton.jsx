import React from 'react';
import { Link } from 'react-router-dom';
import serviceCart from '../services/products';

class CartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: serviceCart.counter,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <nav>
        <button type="button">
          <Link to="/ShoppingCartPage" data-testid="shopping-cart-button">
            Carrinho
          </Link>
        </button>
        <p>{ counter }</p>
      </nav>
    );
  }
}

export default CartButton;
