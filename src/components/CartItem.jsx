import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    const { cartProducts } = this.props;
    this.state = {
      cartProducts,
    };
  }

  renderCart = () => {
    const { cartProducts } = this.state;
    console.log(cartProducts);
    return cartProducts.map((item, index) => (
      <div
        key={ index }
      >
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt={ item.title } width="50px" />
        <p data-testid="shopping-cart-product-quantity">
          { item.quantity }
        </p>
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
