import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { products, quantity } = state;
    let total = 0;
    return (
      <div>
        <h2>Revise seus Produtos</h2>

        {products.map(({ title, id, price }) => {
          total += price * quantity[title];
          return (
            <section key={ id }>
              <p>{title}</p>
              <span>
                R$
                {' '}
                {quantity[title] * price}
              </span>
            </section>
          );
        })}
        <p>
          Total: R$
          {' '}
          {total}
        </p>

        <form>
          <label htmlFor="checkout-fullname">
            Nome Completo
            <input data-testid="checkout-fullname" />
          </label>
          <label htmlFor="checkout-email">
            E-mail
            <input data-testid="checkout-email" />
          </label>
          <label htmlFor="checkout-cpf">
            CPF
            <input data-testid="checkout-cpf" />
          </label>
          <label htmlFor="checkout-phone">
            Telefone
            <input data-testid="checkout-phone" />
          </label>
          <label htmlFor="checkout-cep">
            CEP
            <input data-testid="checkout-cep" />
          </label>
          <label htmlFor="checkout-address">
            Endereço
            <input data-testid="checkout-address" />
          </label>
          <label htmlFor="checkout-city">
            Cidade
            <input id="checkout-city" />
          </label>
          <label htmlFor="checkout-complement">
            Complemento
            <input id="checkout-complement" />
          </label>
          <label htmlFor="checkout-number">
            Número
            <input id="checkout-number" />
          </label>
          <label htmlFor="checkout-state">
            Estado
            <select id="checkout-state">
              <option>BA</option>
              <option>SP</option>
              <option>RO</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default Checkout;
