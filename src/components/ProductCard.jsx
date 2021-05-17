import React from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductCard extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div data-testid="product">
        <h3>{item.title}</h3>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          Price:
          {item.price}
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
