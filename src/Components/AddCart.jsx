import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCart extends Component {
  render() {
    const { cart, id } = this.props;
    console.log(cart);
    return (
      <button
        id={ id }
        type="submit"
        data-testid="product-add-to-cart"
        onClick={ () => cart(id) }
      >
        Add in Cart
      </button>
    );
  }
}

AddCart.propTypes = {
  id: PropTypes.string.isRequired,
  cart: PropTypes.func.isRequired,
};

export default AddCart;
