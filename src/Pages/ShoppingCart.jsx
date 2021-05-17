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

  render() {
    // const { product } = this.props.match.params;
    const { products, quantity } = this.props;
    const reducedProducts = this.reduce(products);

    if (reducedProducts.length === 0) {
      return (
        <div>
          <span>
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </span>
        </div>
      );
    }
    return (
      <>
        {reducedProducts.map((product) => (
          <div className="product-shopping-cart" key={ product }>
            <p data-testid="shopping-cart-product-name">{product}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity[product]}</p>
          </div>
        ))}
        <Link to="/">VOLTAR</Link>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ShoppingCart;