import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button type="submit" onClick={ onClick } data-testid="product-add-to-cart">
          Adicionar ao carrinho!
        </button>
      </div>
    );
  }
}

AddToCart.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddToCart;
