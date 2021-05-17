import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../cart.svg';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/CartShopPage">
          <button type="submit">
            <img src={ cart } style={ { width: '50px' } } alt="imagem carrinho" />
          </button>
        </Link>
        <p>olá</p>

      </div>
    );
  }
}

export default CartButton;
