import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
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
    const { product, product: { price, amount } } = this.props;

    if (amount !== 1) {
      product.amount -= 1;
      product.totalPrice -= price;
      decreaseTotal(price);
    }
  }

  render() {
    const {
      product: {
        title,
        thumbnailId,
        id,
        amount,
        totalPrice,
      },
      deleteItem,
    } = this.props;

    return (
      <div>
        <button
          type="button"
          name={ id }
          onClick={
            (event) => deleteItem(event, totalPrice)
          }
        >
          X
        </button>
        <h2 data-testid="shopping-cart-product-name">
          { title }
        </h2>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp` } alt="Imagem do produto" />
        <h3>
          {`R$ ${parseFloat(totalPrice).toFixed(2)}`}
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
      </div>
    );
  }
}

CartProduct.propTypes = {
  products: PropTypes.object,
}.isRequired;
