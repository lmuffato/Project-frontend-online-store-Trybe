import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { product: { price, amount, availableQuantity } } = this.props;

    this.state = {
      valueProduct: price,
      quantity: amount,
      storageQuantity: availableQuantity,
    };
  }

  componentDidMount() {
    const { getItems, product: { id }, updateTotal } = this.props;
    const { quantity, valueProduct } = this.state;

    getItems({ name: id, value: quantity });
    // updateTotal(valueProduct);
  }

  addPrice = (event) => {
    const { quantity, storageQuantity } = this.state;
    const { product: { price }, getItems } = this.props;
    if (quantity < storageQuantity) {
      this.setState((prev) => ({ quantity: prev.quantity + 1 }));
    }
    const { name, value } = event.target;
    this.setState((prev) => ({ valueProduct: prev.quantity * price }), () => {
      getItems({ name, value });
    });
  }

  // addPrice = () => {
  //   const { product: { price, storageQuantity } } = this.props;
  //   const { quantity } = this.state;

  //   if (quantity < storageQuantity) {
  //     this.setState((prev) => ({ quantity: prev.quantity + 1 }));
  //   }
  //   this.setState((prev) => ({
  //     valueProduct: prev.quantity * price,
  //   }), () => {
  //     const { valueProduct } = this.state; // pegar o valor atualizado do produto
  //     const { updateTotal } = this.props; // função passada pelo shoppingCart
  //     updateTotal(valueProduct); // chama ela com o valor do produto
  //   });
  // }

  decreasePrice = (event) => {
    const { quantity } = this.state;
    const { product: { price }, getItems } = this.props;
    if (quantity > 1) { this.setState((prev) => ({ quantity: prev.quantity - 1 })); }
    this.setState((prev) => ({ valueProduct: prev.quantity * price }));

    const { name, value } = event.target;
    getItems({ name, value });
  }

  render() {
    const { product: { title, thumbnail, id }, deleteItem } = this.props;
    const { valueProduct, quantity } = this.state;

    return (
      <div>
        <button type="button" name={ id } onClick={ /* (event) => deleteItem(event, valueProduct) */ deleteItem }>
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
          name={ id }
          value={ quantity }
          data-testid="product-increase-quantity"
          onClick={ this.addPrice }
        >
          +
        </button>
        <button
          type="button"
          name={ id }
          value={ quantity }
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
