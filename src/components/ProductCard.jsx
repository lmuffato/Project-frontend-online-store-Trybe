import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;

    return (
      <div className="card-text" data-testid="product-detail-name">
        <p>{ title }</p>
        <p>{`R$ ${price.toFixed(2)}` }</p>
        <img className="card-img" src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;
