import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <button type="button">
        <Link to="/ShoppingCartPage" data-testid="shopping-cart-button">
          Carrinho
        </Link>
      </button>
    );
  }
}

export default CartButton;
