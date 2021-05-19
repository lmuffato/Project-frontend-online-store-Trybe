import React from 'react';
import { func, shape } from 'prop-types';

import CartProduct from '../Components/CartProduct';

class ShoppingCart extends React.Component {
  render() {
    const { history: { goBack } } = this.props;
    const empty = <h4 data-testid="shopping-cart-empty-message">Carrinho vazio</h4>;
    const onOff = true;
    const produtcs = (
      <>
        <header className="shopping-cart-header">
          <img
            className="shopping-cart"
            src="https://img2.gratispng.com/20180425/lcq/kisspng-computer-icons-shopping-cart-5ae061983e57a6.1325375415246544882554.jpg"
            alt="carrinho de compras"
          />
          <h3>Carrinho de compras</h3>
        </header>

        <CartProduct />
      </>
    );

    return (
      <div className="shopping-cart-container">
        <button type="button" onClick={ goBack }>
          <img
            className="back"
            src="https://image.flaticon.com/icons/png/512/64/64516.png"
            alt="voltar"
          />
        </button>

        {
          !onOff ? empty : produtcs
        }

      </div>
    );
  }
}

ShoppingCart.propTypes = {
  history: shape({
    goBack: func,
  }).isRequired,
};

export default ShoppingCart;
