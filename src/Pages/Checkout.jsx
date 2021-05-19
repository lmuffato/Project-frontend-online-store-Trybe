import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { products, quantity } = state;
    let total = 0;
    return(
      <div>
        <h2>Revise seus Produtos</h2>
        
        {products.map(({title, id, price}) => {
          total += price * quantity[title];
          return (
            <section key={id}>
              <p>{title}</p>
              <span>
                R$ {quantity[title] * price}
              </span>
            </section>
          )
        })}
        <p>
          Total: R$ {total}
        </p>

        <form>
          <label htmlFor="checkout-fullname">
            Nome Completo
            <input data-testid="checkout-fullname"/>
          </label>
          <label>
            E-mail
            <input data-testid="checkout-email"/>
          </label>
          <label >
            CPF
            <input data-testid="checkout-cpf"/>
          </label>
          <label >
            Telefone
            <input data-testid="checkout-phone"/>
          </label>
          <label >
            CEP
            <input data-testid="checkout-cep"/>
          </label>
          <label >
            Endereço
            <input data-testid="checkout-address"/>
          </label>
          <label >
            Cidade
            <input/>
          </label>
          <label >
            Complemento
            <input/>
          </label>
          <label >
            Número
            <input/>
          </label>
          <label >
            Estado
            <select>
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

export default Checkout;
