import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

class CardItems extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((item) => (
          <CardItem item={ item } key={ item.id } />
        ))}
      </div>
    );
  }
}

CardItems.propTypes = {
  products: PropTypes.string,
}.isRequired;

export default CardItems;
