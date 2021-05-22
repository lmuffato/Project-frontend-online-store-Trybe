import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductsCard from './CheckoutProductsCard';

class CheckoutProductList extends Component {
  render() {
    const { items } = this.props;
    const totalPrice = items
      .reduce(((acc, item) => acc + (item.price * item.quantity)), 0);
    return (
      <section>
        {items.map((item) => <CheckoutProductsCard item={ item } key={ item.id } />)}
        <p>{`Total:${totalPrice}`}</p>
      </section>
    );
  }
}

CheckoutProductList.propTypes = {
  props: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
  }),
}.isRequired;

export default CheckoutProductList;
