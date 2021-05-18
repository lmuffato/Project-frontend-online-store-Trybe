import React, { Component } from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> main-group-1-requisito-10

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    const { product: { price, amount } } = this.props
=======
    const { product: { price, amount } } = this.props;
>>>>>>> main-group-1-requisito-10

    this.state = {
      valueProduct: price,
      quantity: amount,
    };
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> main-group-1-requisito-10
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addPrice }
        >
          +
        </button>
        <button
          type="button"
<<<<<<< HEAD
          data-testid="product-decreate-quantity"
=======
          data-testid="product-decrease-quantity"
>>>>>>> main-group-1-requisito-10
          onClick={ this.decreasePrice }
        >
          -
        </button>
<<<<<<< HEAD
        <p> { this.state.value } </p>
=======
>>>>>>> main-group-1-requisito-10
      </div>
    );
  }
}
<<<<<<< HEAD
=======

CartProduct.propTypes = {
  products: PropTypes.object,
}.isRequired;
>>>>>>> main-group-1-requisito-10
