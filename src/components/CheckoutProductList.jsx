import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductsCard from './CheckoutProductsCard';

class CheckoutProductList extends Component {
  render() {
    const { items } = this.props;
    const totalPrice = items.reduce((e1, e2) => e1.price + e2.price );
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
