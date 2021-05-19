import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, price, img } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ img } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}.isRequired;
