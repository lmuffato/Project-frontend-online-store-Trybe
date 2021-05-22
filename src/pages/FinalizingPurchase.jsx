import React, { Component } from 'react';
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
      cep: '',
      endereco: '',
      cidade: '',
      estado: '',
      erro: false,
      shouldRedirect: false,
    };
  }

  handleChange=(event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick=() => {
    const data = this.state;
    console.log(data);
    const arrayData = Object.values(data);

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
    const {
      nome, email, cpf, telefone, cep, endereco, cidade, estado, erro, shouldRedirect,
    } = this.state;
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
            >
              Nome completo
              <input
                data-testid="checkout-fullname"
                name="nome"
                type="text"
                value={ nome }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
            >
              Email
              <input
                data-testid="checkout-email"
                name="email"
                type="text"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
            >
              CPF
              <input
                data-testid="checkout-cpf"
                name="cpf"
                type="text"
                value={ cpf }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
            >
              Telefone
              <input
                data-testid="checkout-phone"
                name="telefone"
                type="text"
                value={ telefone }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
            >
              CEP
              <input
                data-testid="checkout-cep"
                name="cep"
                type="text"
                value={ cep }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"

            >
              Endereço
              <input
                data-testid="checkout-address"
                name="endereco"
                type="text"
                value={ endereco }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
            >
              cidade
              <input
                data-testid="checkout-city"
                name="cidade"
                type="text"
                value={ cidade }
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="text"
            >
              estado
              <input
                data-testid="checkout-state"
                name="estado"
                type="text"
                value={ estado }
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
          <button
            type="button"
            key="buy-button"
            id="buy-button"
            onClick={ this.handleClick }
          >
            Comprar
          </button>
          {erro ? <p>Campo Vazio</p> : <p>Por Favor Preencha todos os campos</p>}
          {shouldRedirect
            ? <Redirect to="/" />
            : false }
        </div>

      </main>
    );
  }
}

export default FinalizingPurchase;
