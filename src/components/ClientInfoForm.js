import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

export default class ClientInfoForm extends Component {
  render() {
    const { clientInfo: { fullname, email, cpf, phone, cep, address } } = this.props;
    const { onChange: handleChange, onSubmit: handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          data-testid="checkout-fullname"
          value={ fullname }
          onChange={ handleChange }
          name="fullname"
          placeholder="Nome Completo"
          required
        />
        <input
          type="email"
          data-testid="checkout-email"
          onChange={ handleChange }
          value={ email }
          name="email"
          required
          placeholder="Email"
        />
        <input
          type="text"
          data-testid="checkout-cpf"
          onChange={ handleChange }
          value={ cpf }
          required
          name="cpf"
          placeholder="CPF"
        />
        <input
          type="text"
          value={ phone }
          onChange={ handleChange }
          data-testid="checkout-phone"
          required
          name="phone"
          placeholder="Telefone"
        />
        <input
          type="text"
          onChange={ handleChange }
          data-testid="checkout-cep"
          value={ cep }
          name="cep"
          required
          placeholder="CEP"
        />
        <input
          type="text"
          onChange={ handleChange }
          data-testid="checkout-address"
          value={ address }
          name="address"
          required
          placeholder="Endereço"
        />

        <h2>Formas de pagamento</h2>
        <label htmlFor="paymentMethod">
          <input
            type="radio"
            name="paymentMethod"
            onChange={ handleChange }
            value="credit"
            required
          />
          Cartão de Crédito
        </label>

        <label htmlFor="paymentMethod">
          <input
            type="radio"
            name="paymentMethod"
            onChange={ handleChange }
            value="debit"
            required
          />
          Cartão de Débito
        </label>

        <label htmlFor="paymentMethod">
          <input
            type="radio"
            name="paymentMethod"
            onChange={ handleChange }
            value="cash"
            required
          />
          Boleto
        </label>

        <button
          type="submit"
        >
          Finalizar compra
        </button>
      </form>
    );
  }
}

ClientInfoForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  clientInfo: PropTypes.objectOf(shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    cef: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    cep: PropTypes.string,
  })),
}.isRequired;
