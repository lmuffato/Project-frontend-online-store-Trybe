import React from 'react';
import { func, shape } from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { history: { goBack } } = this.props;
    return (
      <div className="shopping-cart-container">
        <button type="button" onClick={ goBack }>
          <img
            className="back"
            src="https://image.flaticon.com/icons/png/512/64/64516.png"
            alt="voltar"
          />
        </button>
        <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
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
