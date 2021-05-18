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

  addPrice = () => {
    const { product: { price } } = this.props;
    this.setState(({ quantity }) => ({ quantity: quantity + 1 }));
    this.setState(({ quantity }) => ({ valueProduct: quantity * price }));
  }

  decreasePrice = () => {
    const { quantity } = this.state;
    const { product: { price } } = this.props;
    if (quantity > 1) { this.setState(({ quantity }) => ({ quantity: quantity - 1 })); }
    this.setState(({ quantity }) => ({ valueProduct: quantity * price }));
  }

  render() {
    const { product: { title, thumbnail }, deleteItem, id } = this.props;
    const { valueProduct } = this.state;
    console.log(valueProduct);
    console.log(this.props);
    return (
      <div>
        <button type="button" onClick={ deleteItem } id={ id }>
          X
        </button>
        <h2>
          { title }
        </h2>
        <image src={ thumbnail } alt="Imagem Produto" />
        <h3>
          { valueProduct }
        </h3>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addPrice }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decreate-quantity"
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
