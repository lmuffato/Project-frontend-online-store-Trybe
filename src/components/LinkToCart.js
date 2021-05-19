import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function LinkToCart() {
  // const { quantity } = props;
  return (
    <>
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        Carrinho de Compras
      </Link>
      {/* <span data-testid="shopping-cart-product-quantity">{quantity}</span> */}
    </>
  );
}

// LinkToCart.propTypes = {
//   quantity: PropTypes.number.isRequired,
// };
