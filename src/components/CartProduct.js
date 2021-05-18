import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { product: { price, amount } } = this.props;

    this.state = {
      valueProduct: price,
      quantity: amount,
    };
  }

  deleteItem = () => {
    // const { id } = event.target;
    // const { products } = this.state;
    // const items = Array.from(products).find((item) => Object.keys(products) === id);
    // console.log('sou eu', id);
    // this.setState({ products: items });
  }

  addPrice = () => {
    const { product: { price } } = this.props;
    this.setState(({ quantity }) => ({ quantity: quantity + 1 }));
    this.setState(({ quantity }) => ({ valueProduct: quantity * price }));
  }

  decreasePrice = () => {
    const { quantity } = this.state;
    const { product: { price } } = this.props;
    if (quantity > 1) { this.setState((prev) => ({ quantity: prev.quantity - 1 })); }
    this.setState((prev) => ({ valueProduct: prev.quantity * price }));
  }

  render() {
    const { product: { title, thumbnail, id }, deleteItem } = this.props;
    const { valueProduct, quantity } = this.state;
    console.log(this.props);
    return (
      <div>
        <button type="button" name={ id } onClick={ deleteItem }>
          X
        </button>
        <h2 data-testid="shopping-cart-product-name">
          { title }
        </h2>
        <img src={ thumbnail } alt="Imagem Produto" />
        <h3>
          { valueProduct }
        </h3>
        <h4 data-testid="shopping-cart-product-quantity">
          { quantity }
        </h4>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addPrice }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreasePrice }
        >
          -
        </button>
      </div>
    );
  }
}

CartProduct.propTypes = {
  products: PropTypes.object,
}.isRequired;
