import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  render() {
    const { productsInCart } = this.props;
    return (
      <div>
        <h1>checkout</h1>
        <form action="">
          <label htmlFor="fullName">
            Nome Completo
            <input name="fullName" data-testid="checkout-fullname" />
          </label>

          <label htmlFor="email">
            Email
            <input name="email" data-testid="checkout-email" />
          </label>

          <label htmlFor="cpf">
            CPF
            <input name="cpf" data-testid="checkout-cpf" />
          </label>

          <label htmlFor="phone">
            Telefone
            <input name="phone" data-testid="checkout-phone" />
          </label>

          <label htmlFor="cep">
            CEP
            <input name="cep" data-testid="checkout-cep" />
          </label>

          <label htmlFor="address">
            Endereço
            <input name="address" data-testid="checkout-address" />
          </label>

          <button type="button">Finalizar Compra</button>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {

};

export default Checkout;