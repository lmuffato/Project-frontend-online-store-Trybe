import React, { Component } from 'react';
import Estados from '../Data';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          <input
            id="nome"
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
        </label>

        <label htmlFor="cpf">
          <input
            id="cpf"
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
        </label>

        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
          />
        </label>

        <label htmlFor="telefone">
          <input
            id="telefone"
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
        </label>

        <label htmlFor="cep">
          <input
            id="cep"
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
          />
        </label>

        <label htmlFor="endereço">
          <input
            id="endereço"
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
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
