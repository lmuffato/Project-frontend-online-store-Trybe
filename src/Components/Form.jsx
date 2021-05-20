import React, { Component } from 'react';
import Estados from '../Data';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome" data-testid="checkout-fullname">
          <input id="nome" type="text" placeholder="Nome Completo" />
        </label>
        <label htmlFor="cpf" data-testid="checkout-cpf">
          <input id="cpf" type="text" placeholder="CPF" />
        </label>
        <label htmlFor="email" data-testid="checkout-email">
          <input id="email" type="email" placeholder="Email" />
        </label>
        <label htmlFor="telefone" data-testid="checkout-phone">
          <input id="telefone" type="text" placeholder="Telefone" />
        </label>
        <label htmlFor="cep" data-testid="checkout-cep">
          <input id="cep" type="text" placeholder="CEP" />
        </label>
        <label htmlFor="endereço" data-testid="checkout-address">
          <input id="endereço" type="text" placeholder="Endereço" />
        </label>
        <label htmlFor="complemento">
          <input id="complemento" type="text" placeholder="Complemento" />
        </label>
        <label htmlFor="numero">
          <input id="numero" type="text" placeholder="Número" />
        </label>
        <label htmlFor="cidade">
          <input id="cidade" type="text" placeholder="Cidade" />
        </label>
        <label htmlFor="estado">
          <select
            id="estado"
            type="text"
            placeholder="Cidade"
          >
            {Estados
              .map((estado, index) => <option key={ index }>{estado}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
