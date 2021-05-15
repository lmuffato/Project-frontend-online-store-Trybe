import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <div data-testid="product" width="150px">
        <h2>{ title }</h2>
        <img src={ img } alt="foto do item" />
        <p>
          Price: R$
          { price }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default ProductCard;
