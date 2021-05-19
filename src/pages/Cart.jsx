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
    console.log(products);
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
          </div>
        ))}
      </div>
    );
  }
}
Cart.propTypes = {
  items: PropTypes.object,
}.isRequired;
export default Cart;
