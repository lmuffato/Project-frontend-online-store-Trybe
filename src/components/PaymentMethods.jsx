import React, { Component } from 'react';

class PaymentMethods extends Component {
  render() {
    return (
      <section className="payment-method-section">
        <h1> Método de pagamento </h1>
        <label htmlFor="payment-method" className="payment-method-form">
          <input type="radio" name="payment-method" id="boleto" />
          <img src="https://www.vitoriaemcristo.org/img/icon-segunda-via-boleto.svg" alt="Icone Boleto" />
          <input type="radio" name="payment-method" id="visa" />
          <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/master/flat-rounded/visa.svg?sanitize=true" alt="Icone visa" />
          <input type="radio" name="payment-method" id="mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Icone mastercard" />
          <input type="radio" name="payment-method" id="elo" />
          <img src="https://cdn.worldvectorlogo.com/logos/elo-1.svg" alt="Icone Elo" />
        </label>
      </section>
    );
  }
}

export default PaymentMethods;
