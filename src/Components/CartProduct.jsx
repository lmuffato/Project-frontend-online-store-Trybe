import React, { Component } from 'react';
import { string, number } from 'prop-types';

class CartProduct extends Component {
  render() {
    const { title, id, thumbnail, price, quantity } = this.props;
    return (
      <li
        className="cart-product-container"
        key={ id }
        data-testid="product-add-to-cart"
      >
        <button type="button">X</button>
        <section className="cart-product">
          <img src={ thumbnail } alt="imagem" className="imageProduct" />
          <div data-testid="shopping-cart-product-name">{ title }</div>
        </section>
        <div
          className="shopping-cart-product-quantity"
          data-testid="shopping-cart-product-quantity"
        >
          {quantity}
        </div>
        <div>{ `R$ ${price}` }</div>
      </li>
    );
  }
}

CartProduct.propTypes = {
  title: string.isRequired,
  id: string.isRequired,
  thumbnail: string.isRequired,
  price: number.isRequired,
  quantity: number.isRequired,
};

export default CartProduct;
