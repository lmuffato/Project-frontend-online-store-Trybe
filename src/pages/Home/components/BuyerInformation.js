import React from 'react';
import PropTypes from 'prop-types';

class BuyerInformation extends React.Component {
  render() {
    const { fullName, email, cpf, phone, cep, address, handleChange } = this.props;
    return (
      <div>
        <h1>Informações do comprador</h1>
        <label htmlFor="FullName">
          Nome completo
          <input
            type="text"
            name="fullName"
            value={ fullName }
            onChange={ handleChange }
            data-testid="checkout-fullname"
            required
          />
        </label>
        <br />
        <label htmlFor="Email">
          Email
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ handleChange }
            data-testid="checkout-email"
            required
          />
        </label>
        <br />
        <label htmlFor="CPF">
          CPF
          <input
            type="text"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
            data-testid="checkout-cpf"
            required
          />
        </label>
        <br />
        <label htmlFor="Phone">
          Telefone
          <input
            type="text"
            name="phone"
            value={ phone }
            onChange={ handleChange }
            data-testid="checkout-phone"
            required
          />
        </label>
        <br />
        <label htmlFor="CEP">
          CEP
          <input
            type="text"
            name="cep"
            value={ cep }
            onChange={ handleChange }
            data-testid="checkout-cep"
            required
          />
        </label>
        <br />
        <label htmlFor="Address">
          Endereço
          <input
            type="text"
            name="address"
            value={ address }
            onChange={ handleChange }
            data-testid="checkout-address"
            required
          />
        </label>
      </div>
    );
  }
}

BuyerInformation.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string, // Number
  phone: PropTypes.string, // Number
  cep: PropTypes.string, // Number
  address: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default BuyerInformation;
