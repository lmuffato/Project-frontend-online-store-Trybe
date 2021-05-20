import React, { Component } from 'react';
import { string, number } from 'prop-types';

class CartProduct extends Component {
  constructor(props) {
    super(props);
    const { quantity } = props;

    this.state = {
      quantity,
    };
  }

  increment = () => {
    this.setState(({ quantity }) => {
      const newQuantity = quantity + 1;
      return { quantity: newQuantity };
    });
  }

  decrement = () => {
    this.setState(({ quantity }) => {
      const newQuantity = quantity - 1;
      return { quantity: newQuantity };
    });
  }

  render() {
    const { title, id, thumbnail, price } = this.props;
    const { quantity } = this.state;

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

        <section className="quantity-section">
          <button
            data-testid="product-decrease-quantity"
            className="quantity-button"
            type="button"
            onClick={ this.decrement }
          >
            -
          </button>
          <div
            className="shopping-cart-product-quantity"
            data-testid="shopping-cart-product-quantity"
          >
            {quantity}
          </div>
          <button
            data-testid="product-increase-quantity"
            className="quantity-button"
            type="button"
            onClick={ this.increment }
          >
            +
          </button>
        </section>
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
