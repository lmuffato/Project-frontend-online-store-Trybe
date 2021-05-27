import React from 'react';
import PropTypes from 'prop-types';

class Payment extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <h1>Método de Pagamento</h1>
        <label htmlFor="id-boleto">
          <input
            type="radio"
            name="Payment"
            value="boleto"
            onChange={ handleChange }
            required
          />
          Boleto
        </label>
        <label htmlFor="id-visa">
          <input
            type="radio"
            name="Payment"
            value="visa"
            onChange={ handleChange }
          />
          Visa
        </label>
        <label htmlFor="id-master">
          <input
            type="radio"
            name="Payment"
            value="master"
            onChange={ handleChange }
          />
          Master
        </label>
        <label htmlFor="id-elo">
          <input
            type="radio"
            name="Payment"
            value="elo"
            onChange={ handleChange }
          />
          Elo
        </label>
      </div>
    );
  }
}

Payment.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  handleChange: PropTypes.func,
}.isRequired;

export default Payment;
