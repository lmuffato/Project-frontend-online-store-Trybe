import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super();

    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    const { obj } = this.props;
    const newObj = obj;
    let previousObj = JSON.parse(localStorage.getItem('cartItems'));

    if (previousObj) {
      previousObj = [...previousObj, newObj];
      localStorage.setItem('cartItems', JSON.stringify(previousObj));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([newObj]));
    }
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.addCart }
        data-testid="product-add-to-cart"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

Button.propTypes = {
  clickFunc: PropTypes.func,
}.isRequired;

export default Button;
