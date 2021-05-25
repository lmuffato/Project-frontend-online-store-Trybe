import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductList from '../components/CheckoutProductList';
import BuyerInfoForm from '../components/BuyerInfoForm';
import PaymentMethods from '../components/PaymentMethods';

class Checkout extends Component {
  render() {
    const { location: { state: { carts } } } = this.props;
    return (
      <main className="checkout-page">
        <section className="checkout-prod-list">
          <CheckoutProductList items={ carts } />
        </section>
        <BuyerInfoForm className="buyer-info-data" />
        <PaymentMethods className="payment-methods" />
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
