import React from 'react';
import PropTypes from 'prop-types';

import CartResume from '../../components/CartResume';
import Form from '../../components/Form';

class Checkout extends React.Component {
  super() {
    const { cardProducts, totalPrice } = this.props;
    return (
      <>
        <Form />
        <CartResume
          cardProducts={ cardProducts }
          totalPrice={ totalPrice }
        />
        <p>Testing</p>
      </>
    );
  }
}

Checkout.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
}.isRequired;

export default Checkout;
