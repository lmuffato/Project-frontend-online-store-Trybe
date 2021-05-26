import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    const { cartProducts } = this.props;
    let productsQuantity = 0;
    for (let index = 0; index < cartProducts.length; index += 1) {
      productsQuantity += 1;
    }
    this.state = {
      productsQuantity,
      cartProducts,
    };
  }

  renderCart = () => {
    const { cartProducts, productsQuantity } = this.state;
    return cartProducts.map((item, index) => (
      <div
        key={ index }
      >
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt={ item.title } width="50px" />
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { productsQuantity }
        </span>
      </div>
    ));
  }

  render() {
    return this.renderCart();
  }
}

CartItem.propTypes = {
  cartProducts: PropTypes.array,
}.isRequired;

export default CartItem;
