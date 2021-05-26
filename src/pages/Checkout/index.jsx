import React from 'react';
import PropTypes from 'prop-types';

import CartResume from '../../components/CartResume';
import Form from '../../components/Form';

class Checkout extends React.Component {
  render() {
    const { cardProducts, totalPrice } = this.props;
    return (
      <div>
        <CartResume
          cardProducts={ cardProducts }
          totalPrice={ totalPrice }
        />
        <Form />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
}.isRequired;

export default Checkout;
