import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductList from '../components/CheckoutProductList';
import BuyerInfoForm from '../components/BuyerInfoForm';
import PaymentMethods from '../components/PaymentMethods';

class Checkout extends Component {
  render() {
    const { ShopCartItems } = this.props;
    return (
      <main>
        <div>
          <CheckoutProductList items={ ShopCartItems } />
        </div>
        <div>
          <BuyerInfoForm />
        </div>
        <div>
          <PaymentMethods />
        </div>
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
