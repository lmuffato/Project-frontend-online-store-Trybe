import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.addItems();
  }

  addItems = () => {
    const { items } = this.props;
    this.setState((previousState) => ({
      products: [...previousState.products, ...items],
    }));
  }

  render() {
    const { products } = this.state;
    const { cartItemMethod, removeCardItemMethod } = this.props;
    if (products.length < 1) {
      return (
        <div>
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        </div>
      );
    }

    return (
      <div>
        { products.map((product, index) => (
          <div key={ `${product.id}_${index}` }>
            <h2 data-testid="shopping-cart-product-name">{product.title}</h2>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {`Quantidade: ${product.quant}`}
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              value={ product }
              onClick={ () => cartItemMethod(product) }
            >
              Add 1
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              value={ product }
              onClick={ () => removeCardItemMethod(product) }
            >
              Remove 1
            </button>
          </div>
        ))}
      </div>
    );
  }
}
Cart.propTypes = {
  items: PropTypes.object,
  cartItemMethod: PropTypes.func,
}.isRequired;
export default Cart;
