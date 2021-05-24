import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class BuyerInfoForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="buyer-info">
          <h1>Suas informações</h1>
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
          <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
          <input type="text" placeholder="Email" data-testid="checkout-email" />
          <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
          <input type="text" placeholder="CEP" data-testid="checkout-cep" />
          <input type="text" placeholder="Endereço" data-testid="checkout-address" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select id="states" placeholder="Estado">
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="PR">PR</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="ES">ES</option>
            <option value="BA">BA</option>
          </select>
        </label>
      </form>
    );
  }
}

export default BuyerInfoForm;
