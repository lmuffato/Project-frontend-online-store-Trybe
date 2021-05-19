import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

export default class ShoppingCart extends Component {
  render() {
    const { products } = this.props;

    // https://qastack.com.br/programming/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
    const filterProducts = products
      .filter((product, index, array) => index === array.findIndex((value) => (
        value.title === product.title)));

    // https://qastack.com.br/programming/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
    const counts = products.reduce((map, val) => {
      map[val.title] = (map[val.title] || 0) + 1;
      return map;
    }, {});

    // console.log(counts);
    const quantity = Object.values(counts);
    // console.log(quantity);

    return (
      <div>
        { (filterProducts.length > 0) ? filterProducts.map((product, index) => (
          <div key={ index }>
            <h1 data-testid="shopping-cart-product-name">{product.title}</h1>
            <img src={ product.thumbnail } alt={ product.title } />
            <span data-testid="shopping-cart-product-quantity">{quantity[index]}</span>
            <div>{product.price}</div>
          </div>
        )) : <EmptyCart /> }
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(Object),
};

ShoppingCart.defaultProps = {
  products: [],
};
