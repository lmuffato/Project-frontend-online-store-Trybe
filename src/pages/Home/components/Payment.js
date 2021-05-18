import React from 'react';

class Payment extends React.Component {
  render() {
    return (
      <div>
        <h1>Método de Pagamento</h1>
        <label htmlFor="Forma-de-pagamento">
          Boleto
          <input type="radio" name="Payment" value="boleto" />
        </label>
        <label htmlFor="Forma-de-pagamento">
          Visa
          <input type="radio" name="Payment" value="visa" />
        </label>
        <label htmlFor="Forma-de-pagamento">
          Master
          <input type="radio" name="Payment" value="master" />
        </label>
        <label htmlFor="Forma-de-pagamento">
          Elo
          <input type="radio" name="Payment" value="elo" />
        </label>
      </div>
    );
  }
}

export default Payment;
