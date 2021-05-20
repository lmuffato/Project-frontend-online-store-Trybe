import React, { Component } from 'react';
import ListaCheckout from '../components/ListaCheckout';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalPayment: 0,
    };

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentDidMount() {
    this.handleCheckout();
  }

  handleCheckout() {
    const get = localStorage.getItem('products');
    const getPrice = localStorage.getItem('total');
    if (get) {
      this.setState({ cart: JSON.parse(get) });
    }
    if (getPrice) {
      this.setState({ totalPayment: JSON.parse(getPrice) });
    }
  }

  render() {
    const { cart, totalPayment } = this.state;

    return (
      <>
        <section>
          {cart.map((item) => <ListaCheckout key={ item.id } product={ item } />)}
          <strong>
            { new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPayment)}
          </strong>
        </section>
        <form>
          <input type="text" name="" id="" data-testid="checkout-fullname" />
          <input type="text" name="" id="" data-testid="checkout-cpf" />
          <input type="email" name="" id="" data-testid="checkout-email" />
          <input type="text" name="" id="" data-testid="checkout-phone" />
          <input type="text" name="" id="" data-testid="checkout-cep" />
          <input type="text" name="" id="" data-testid="checkout-address" />
        </form>
        <div>
          <button type="button">Comprar</button>
        </div>
      </>
    );
  }
}
