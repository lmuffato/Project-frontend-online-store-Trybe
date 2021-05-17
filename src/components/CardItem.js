import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { item: { title, price, thumbnail, id } } = this.props;

    return (
      <div data-testid="product" key={ id }>
        <h2>{ title }</h2>
        <span>{ price }</span>
        <img src={ thumbnail } alt="alt" />
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default CardItem;
