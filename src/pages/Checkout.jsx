import React, { Component } from 'react'

export default class Checkout extends Component {
  render() {
    return (
      <>
        <section>
        </section>
        <form>
          <input type="text" name="" id="" data-testid="checkout-fullname" />
          <input type="text" name="" id="" data-testid="checkout-cpf"/>
          <input type="email" name="" id="" data-testid="checkout-email" />
          <input type="text" name="" id="" data-testid="checkout-phone" />
          <input type="text" name="" id="" data-testid="checkout-cep"/>
          <input type="text" name="" id="" data-testid="checkout-address"/>
        </form>
        <div>
          <button type="button">Comprar</button>
        </div>
      </>
    );
  }
}
