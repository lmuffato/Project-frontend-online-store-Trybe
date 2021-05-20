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

        />
        <input
          type="email"
          data-testid="checkout-email"
          onChange={ handleChange }
          value={ email }
          name="email"

          placeholder="Email"
        />
        <input
          type="text"
          data-testid="checkout-cpf"
          onChange={ handleChange }
          value={ cpf }

          name="cpf"
          placeholder="CPF"
        />
        <input
          type="text"
          value={ phone }
          onChange={ handleChange }
          data-testid="checkout-phone"

          name="phone"
          placeholder="Telefone"
        />
        <input
          type="text"
          onChange={ handleChange }
          data-testid="checkout-cep"
          value={ cep }
          name="cep"

          placeholder="CEP"
        />
        <input
          type="text"
          onChange={ handleChange }
          data-testid="checkout-address"
          value={ address }
          name="address"

          placeholder="Endereço"
        />

        <h2>Formas de pagamento</h2>
        <div className="radios">
          <label htmlFor="paymentMethod">
            <input
              type="radio"
              name="paymentMethod"
              onChange={ handleChange }
              value="credit"

            />
            Cartão de Crédito
          </label>

          <label htmlFor="paymentMethod">
            <input
              type="radio"
              name="paymentMethod"
              onChange={ handleChange }
              value="debit"

            />
            Cartão de Débito
          </label>

          <label htmlFor="paymentMethod">
            <input
              type="radio"
              name="paymentMethod"
              onChange={ handleChange }
              value="cash"

            />
            Boleto
          </label>
        </div>

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
