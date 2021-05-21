import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutProductsCard extends Component {
  render() {
    const { item } = this.props;
    const { title, id, image, quantity, price } = item;
    return (
      <div id={ id }>
        <image src={ image } />
        <p>{ title }</p>
        <p>{ quantity }</p>
        <p>{`R$: ${price}`}</p>
      </div>
    );
  }
}

CheckoutProductsCard.propTypes = {
  props: PropTypes.shape({
    items: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    }),
  }),
}.isRequired;

export default CheckoutProductsCard;
