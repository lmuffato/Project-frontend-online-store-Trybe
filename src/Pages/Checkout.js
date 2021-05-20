import React, { Component } from 'react';
import '../styles/checkout.css';
import Form from '../Components/Form';
import Payment from '../Components/Payment';

class Checkout extends Component {
  render() {
    return (
      <div>
        <section className="list_Products">
          <h2>Revise seus produtos</h2>
          <ul>
            <li>
              Produto 1
            </li>
            <li>
              Produto 2
            </li>
          </ul>
          <h3>Total:</h3>
        </section>
        <section className="form">
          <Form />
        </section>
        <section className="payment">
          <Payment />
        </section>
        <button type="button" className="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
