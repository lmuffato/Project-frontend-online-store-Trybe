import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <>
        <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
        <button
          type="button"
          data-testid="checkout-products"
        >
          <Link to="/checkout">
            Finalizar Compra
          </Link>
        </button>
        <button type="button">
          <Link to="/">
            <img
              className="back"
              src="https://image.flaticon.com/icons/png/512/64/64516.png"
              alt="voltar"
            />
          </Link>
        </button>
      </>
    );
  }
}

export default ShoppingCart;
