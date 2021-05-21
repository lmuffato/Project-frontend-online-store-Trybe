import React from 'react';
import PropTypes from 'prop-types';

class Payment extends React.Component {
  render() {
    const { bookmarkedOnly, handleChange } = this.props;
    return (
      <div>
        <h1>Método de Pagamento</h1>
        <label htmlFor="id-boleto">
          Boleto
          <input
            type="checkbox"
            name="Payment"
            value="boleto"
            checked={ bookmarkedOnly }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="id-visa">
          Visa
          <input
            type="checkbox"
            name="Payment"
            value="visa"
            checked={ bookmarkedOnly }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="id-master">
          Master
          <input
            type="checkbox"
            name="Payment"
            value="master"
            checked={ bookmarkedOnly }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="id-elo">
          Elo
          <input
            type="checkbox"
            name="Payment"
            value="elo"
            checked={ bookmarkedOnly }
            onChange={ handleChange }
          />
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
