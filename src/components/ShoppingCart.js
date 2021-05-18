import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  reduce = (arr) => {
    const reduced = [];
    arr.forEach((element) => {
      if (!reduced.includes(element)) {
        reduced.push(element);
      }
    });
    return reduced;
  }

  conditionalEmpty = () => {
    const { products } = this.props;
    if (products.length === 0) {
      return (
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      );
    }
  }

  render() {
    const { products, quantity, handleAddButton,
      handleSubtractButton, handleExcludeButton } = this.props;
    const reducedProducts = this.reduce(products);
    return (
      <div>
        <button type="button">
          <Link to="/">Voltar</Link>
        </button>
        { this.conditionalEmpty() }
        <ul>
          { reducedProducts.map((element) => (
            <li key={ element }>
              <h1 data-testid="shopping-cart-product-name">{element}</h1>
              <h2 data-testid="shopping-cart-product-quantity">{quantity[element]}</h2>
              <button
                type="button"
                value={ element }
                onClick={ handleSubtractButton }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <button
                type="button"
                value={ element }
                onClick={ handleAddButton }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ element }
                onClick={ handleExcludeButton }
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
        <button type="button">
          <Link to="/checkout" data-testid="checkout-products">Finalizar compras</Link>
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  quantity: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddButton: PropTypes.func.isRequired,
  handleSubtractButton: PropTypes.func.isRequired,
  handleExcludeButton: PropTypes.func.isRequired,
};

export default ShoppingCart;
