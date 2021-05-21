import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductsCard from './CheckoutProductsCard';

class CheckoutProductList extends Component {
  render() {
    const { items } = this.props;
    return (items.map((item) => <CheckoutProductsCard item={ item } key={ item.id } />));
  }
}

CheckoutProductList.propTypes = {
  props: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
  }),
}.isRequired;

export default CheckoutProductList;
