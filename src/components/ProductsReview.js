import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductReview from './ProductReview';

export default class ProductsReview extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <table className="products-review">
        <thead>
          <tr>
            <th>produto</th>
            <th>quantidade</th>
            <th>preço</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cartItems).map((cartItem, i) => (
            <ProductReview key={ i } product={ cartItem } />
          ))}
        </tbody>
      </table>
    );
  }
}

ProductsReview.propTypes = {
  cartItems: PropTypes.shape({}),
}.isRequired;
