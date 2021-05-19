import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCart extends Component {
  render() {
    const { cart, id, title, thumbnail, price } = this.props;
    const { productToCart, product } = this.props;
    return (
      <button
        type="submit"
        data-testid="product-add-to-cart"
// <<<<<<< HEAD
        onClick={ () => cart([id, thumbnail, title, price]) }
        
//=======

        onClick={ () => productToCart(product) }
// >>>>>
      >
        Add in Cart
      </button>
    );
  }
}

AddCart.propTypes = {
// <<<<<<< HEAD
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cart: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
// =======
  productToCart: PropTypes.func.isRequired,
// >>>>>>> 6f643354f9559458934a0ad586772e874269d7c5
};

export default AddCart;
