import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Checkout extends Component {
  verifyCheckout = () => {
    const { products } = this.props;
    if (products.length === 0) {
      return (
        <p><strong>Sem produtos no carrinho</strong></p>
      );
    }
  }

  render() {
    const { products, quantity } = this.props;
    return (
      <div className="div-checkout">
        <button type="button">
          <Link to="/cart-shopping">Voltar</Link>
        </button>
        <div className="div-review-order">
          <p>Revise seus produtos</p>
          <div>
            { this.verifyCheckout() }
            <ul>
              {products.map((element, index) => (
                <li key={ index }>
                  {element}
                  <span className="quantity-order">{ `(${quantity[element]})`}</span>
                </li>))}
            </ul>
          </div>
          <p>
            Total: R$
            <span className="total-order">
              0,0
            </span>
          </p>
        </div>
        <form>
          <fieldset className="form-checkout">
            Informações do comprador
            <div>
              <input
                type="text"
                data-testid="checkout-fullname"
                placeHolder="Nome completo"
              />
              <input
                type="email"
                data-testid="checkout-email"
                placeHolder="E-mail"
              />
              <input
                type="text"
                data-testid="checkout-cpf"
                placeHolder="CPF"
              />
              <input
                type="text"
                data-testid="checkout-phone"
                placeHolder="Telefone"
              />
            </div>
            <div>
              <input
                type="text"
                data-testid="checkout-address"
                placeHolder="Endereço"
              />
              <input
                type="text"
                data-testid="checkout-cep"
                placeHolder="CEP"
              />
            </div>
          </fieldset>
        </form>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantity: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Checkout;
