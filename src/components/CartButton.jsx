import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    const { data, newCartItemId } = this.props;
    return (
      <nav>
        <button type="button">
          <Link
            to={ { pathname: '/ShoppingCartPage', state: { data, newCartItemId } } }
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </button>
        <p>contador</p>
      </nav>
    );
  }
}

export default CartButton;
