import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, price, img, productSelected, id } = this.props;
    const detailsLink = `/details/${id}/${productSelected.category_id}`;
    return (
      <Link to={ detailsLink } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{title}</h2>
          <img src={ img } alt={ title } />
          <p>{price}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  productSelected: PropTypes.object,
}.isRequired;
