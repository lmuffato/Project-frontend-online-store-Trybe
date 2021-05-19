import React, { Component, useImperativeHandle } from 'react';
import { Redirect } from 'react-router-dom';
import { getAll } from '../services/localStorage';

class FinalizingPurchase extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: '',
      payment: '',
      erro: false,
      shouldRedirect: false,
    };
  }

  handleChange=(event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick=() => {
    const data = this.state;
    arrayData = data.Object.values();

    const flag = arrayData.some((item) => item !== '');
    if (flag) {
      this.setState({
        erro: true,
        shouldRedirect: true,
      });
    } else {
      this.setState({
        erro: false,
      });
    }
  }

  render() {
    const storageCheck = () => getAll();
    const storage = storageCheck();
    const { erro, shouldRedirect } = this.state;
    let totalPrice = 0;
    if (storage === null) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    storage.forEach((item) => {
      totalPrice += item.price * item.buyQuantity;
    });
    return (
      <main>
        <div>
          <p>Revise Seus Produtos</p>
          {storage.map((item) => (
            <div key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.title}</p>
              <p>
                Preço :
                {item.price * item.buyQuantity}
              </p>
            </div>

          ))}
          <p>
            Total :
            {totalPrice}
          </p>
        </div>
        <div>
          <form>
            <label
              htmlFor="text"
              data-testid="checkout-fullname"
            >
              Nome completo
              <input
                name="nome"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-email"
            >
              Email
              <input
                name="email"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-cpf"
            >
              CPF
              <input
                name="cpf"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-phone"
            >
              Telefone
              <input
                name="telefone"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-cep"
            >
              CEP
              <input
                name="cep"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-address"

            >
              Endereço
              <input
                name="endereco"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-city"
            >
              cidade
              <input
                name="cidade"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
              data-testid="checkout-state"
            >
              estado
              <input
                name="estado"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
          </form>
        </div>
        <div>
          <p>Método de Pagamento</p>
          <label htmlFor="payment">
            Boleto
            <input
              data-testid="payment-boleto "
              type="radio"
              value="boleto"
              name="payment"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="payment-visa">
            Visa
            <input
              data-testid="payment-visa "
              type="radio"
              value="visa"
              name="payment"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="payment-MasterCard">
            MasterCard
            <input
              data-testid="payment-MasterCard "
              type="radio"
              value="master"
              name="payment"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="payment-Elo">
            Elo
            <input
              data-testid="payment-Elo "
              type="radio"
              value="elo"
              name="payment"
              onClick={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={ this.handleClick }>Comprar</button>
          {erro ? <p>Campo Vazio</p> : <p>Por Favor Preencha todos os campos</p>}
          {shouldRedirect
            ? <Redirect to="/" />
            : <p>Por Favor Preencha todos os campos</p> }
        </div>

      </main>
    );
  }
}

export default FinalizingPurchase;
