import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductList from '../components/CheckoutProductList';
import BuyerInfoForm from '../components/BuyerInfoForm';
import PaymentMethods from '../components/PaymentMethods';

class Checkout extends Component {
  render() {
    const { location: { state: { carts } } } = this.props;
    return (
      <main>
        <CheckoutProductList items={ carts } />
        <BuyerInfoForm />
        <PaymentMethods />
      </main>
    );
  }
}

Checkout.propTypes = {
  props: PropTypes.shape({
    ShopCartItems: PropTypes.arrayOf(PropTypes.object),
  }),
}.isRequired;

export default Checkout;
