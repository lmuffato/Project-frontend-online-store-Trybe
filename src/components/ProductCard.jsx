import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { item } = this.props;

    return (
      <div data-testid="product">
        <h4>{ item.title }</h4>
        <img src={ item.thumbnail } alt="imagem do produto" />
        <p>{ item.price }</p>
      </div>

    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
