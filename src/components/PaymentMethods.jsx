import React, { Component } from 'react';

class PaymentMethods extends Component {
  render() {
    return (
      <section>
        <h1> Método de pagamento </h1>
        <label htmlFor="payment-method">
          <input type="radio" name="payment-method" id="boleto" />
          <img src="???" alt="Icone Boleto" />
          <input type="radio" name="payment-method" id="visa" />
          <img src="???" alt="Icone visa" />
          <input type="radio" name="payment-method" id="mastercard" />
          <img src="???" alt="Icone mastercard" />
          <input type="radio" name="payment-method" id="elo" />
          <img src="???" alt="Icone Boleto" />
        </label>
      </section>
    );
  }
}

export default PaymentMethods;
