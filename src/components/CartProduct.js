// Falta implementar o requisito 9 para que este seja atualizado e setado para que funcione direito

import React, { Component } from 'react';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { products: { value } } = this.props;

    this.state = {
      valueProduct: value,
      quantity: 1,
    };
  }

  addPrice = () => {
    const { valueProduct } = this.state;
    const { products: { value } } = this.props;
    this.setState(({ quantity }) => ({ quantity: quantity + 1 }));
    this.setState(({ quantity }) => ({ valueProduct: quantity * value }));
  }

  decreasePrice = () => {
    const { valueProduct, quantity } = this.state;
    const { products: { value } } = this.props;
    if (quantity > 0) { this.setState(({ quantity }) => ({ quantity: quantity - 1 })); }
    this.setState(({ quantity }) => ({ valueProduct: quantity * value }));
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
