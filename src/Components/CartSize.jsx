import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartSize extends Component {
  render() {
    const { size } = this.props;
    return (
      <div>
        <p>Seu carrinho:</p>
        <p data-testid="shopping-cart-size">{ size }</p>
      </div>
    );
  }
}

CartSize.propTypes = {
  size: PropTypes.number.isRequired,
};

export default CartSize;
