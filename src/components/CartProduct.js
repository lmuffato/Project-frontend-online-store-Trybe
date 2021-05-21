import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { product: { price, id }, cartItems } = this.props;

    this.state = {
      valueProduct: price,
      quantity: cartItems[id].amount || 0,
    };
  }

  componentDidMount() {
    const { increaseTotal, product } = this.props;
    increaseTotal(product.totalPrice);
  }

  addProduct = () => {
    const { increaseTotal } = this.props;
    const { product, product: { price, availableQuantity } } = this.props;
    if (product.amount < availableQuantity) {
      product.amount += 1;
      product.totalPrice += price;
      increaseTotal(price);
    }
  }

  decreaseProduct = () => {
    const { decreaseTotal } = this.props;
    const { product, product: { price } } = this.props;
    product.amount -= 1;
    product.totalPrice -= price;
    decreaseTotal(price);
  }

  render() {
    // console.log(this.props);
    const {
      product: {
        title,
        thumbnail,
        id,
        amount,
        totalPrice,
      },
      deleteItem,
      total } = this.props;

    const { valueProduct, quantity } = this.state;
    console.log(quantity);
    return (
      <div>
        <button
          type="button"
          name={ id }
          onClick={
            (event) => deleteItem(event, valueProduct)
          }
        >
          X
        </button>
        <h2 data-testid="shopping-cart-product-name">
          { title }
        </h2>
        <img src={ thumbnail } alt="Imagem Produto" />
        <h3>
          { totalPrice }
        </h3>
        <h4 data-testid="shopping-cart-product-quantity">
          { amount }
        </h4>
        <button
          name="increase"
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addProduct }
        >
          +
        </button>
        <button
          name="decrease"
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseProduct }
        >
          -
        </button>
        <div>{total}</div>
      </div>
    );
  }
}

CartProduct.propTypes = {
  products: PropTypes.object,
}.isRequired;
