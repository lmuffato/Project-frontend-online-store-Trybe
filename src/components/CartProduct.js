import React, { Component } from 'react';

export default class CartProduct extends Component {
  constructor() {
    super();

    this.state = {
      valueProduct: 0,
      quantity: 1,
    };
  }

  addPrice = () => {
    const { valueProduct, quantity } = this.state;
    const { products: { value } } = this.props;
    this.setState({ valueProduct: quantity * value });
    this.setState({ quantity: quantity + 1 });
  }

  decreasePrice = () => {
    const { valueProduct, quantity } = this.state;
    const { products: { value } } = this.props;
    this.setState({ valueProduct: quantity * value });
    if (quantity > 0) { this.setState({ quantity: quantity - 1 }); }
  }

  render() {
    const { products: { name, value, imgPath } } = this.props;
    const { valueProduct } = this.state;
    console.log(valueProduct);
    console.log(this.props);
    return (
      <div>
        <h2>
          { name }
        </h2>
        <image src={ imgPath } alt="Imagem Produto" />
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
        <p> { this.state.value } </p>
      </div>
    );
  }
}
