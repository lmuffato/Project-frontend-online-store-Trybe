import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ title, price, thumbnail, id }) => (
          <div data-testid="product" key={ id }>
            <h2>{ title }</h2>
            <span>{ price }</span>
            <img src={ thumbnail } alt="alt" />
          </div>
        ))}
      </div>
    );
  }
}

CardItem.propTypes = {
  products: PropTypes.string,
}.isRequired;

export default CardItem;
