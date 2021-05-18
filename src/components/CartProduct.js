import React, { Component } from 'react';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { product: { price, amount } } = this.props

    this.state = {
      valueProduct: price,
      quantity: amount,
    };
  }

  addPrice = () => {
    const { valueProduct, quantity } = this.state;
    const { product: { price } } = this.props;
    this.setState({ valueProduct: quantity * price });
    this.setState({ quantity: quantity + 1 });
  }

  decreasePrice = () => {
    const { valueProduct, quantity } = this.state;
    const { product: { price } } = this.props;
    this.setState({ valueProduct: quantity * price });
    if (quantity > 0) { this.setState({ quantity: quantity - 1 }); }
  }

  render() {
    const { product: { title, thumbnail } } = this.props;
    const { valueProduct } = this.state;
    console.log(valueProduct);
    console.log(this.props);
    return (
      <div>
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
        <p> { this.state.value } </p>
      </div>
    );
  }
}
