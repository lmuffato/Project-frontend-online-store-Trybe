import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Link to={ `/${item.id}` }>
        <div data-testid="product">
          <h3>{item.title}</h3>
          <img src={ item.thumbnail } alt={ item.title } width="120px" />
          <p>
            Price:
            {item.price}
          </p>
        </div>
      </Link>
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
