import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCart extends Component {
  render() {
    const { cart, id, title, thumbnail, price } = this.props;
    console.log();
    return (
      <button
        id={ id }
        type="submit"
        data-testid="product-add-to-cart"
        onClick={ () => cart([id, thumbnail, title, price]) }
      >
        Add in Cart
      </button>
    );
  }
}

AddCart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cart: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default AddCart;
