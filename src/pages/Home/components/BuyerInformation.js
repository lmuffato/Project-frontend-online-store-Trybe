import React from 'react';

class BuyerInformation extends React.Component {
  render() {
    return (
      <div>
        <h1>Informações do comprador</h1>
        <label htmlFor="FullName">
          Nome completo
          <input type="text" data-testid="checkout-fullname" />
        </label>
        <br />
        <label htmlFor="Email">
          Email
          <input type="text" data-testid="checkout-email" />
        </label>
        <br />
        <label htmlFor="CPF">
          CPF
          <input type="text" data-testid="checkout-cpf" />
        </label>
        <br />
        <label htmlFor="Phone">
          Telefane
          <input type="text" data-testid="checkout-phone" />
        </label>
        <br />
        <label htmlFor="CEP">
          CEP
          <input type="text" data-testid="checkout-cep" />
        </label>
        <br />
        <label htmlFor="Adress">
          Endereço
          <input type="text" data-testid="checkout-address" />
        </label>
      </div>
    );
  }
}

export default BuyerInformation;
