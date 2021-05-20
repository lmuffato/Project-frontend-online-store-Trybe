import React, { Component } from 'react';
import '../styles/checkout.css';
import { object } from 'prop-types';
import Form from '../Components/Form';
import Payment from '../Components/Payment';
import CartProduct from '../Components/CartProduct';

class Checkout extends Component {
  render() {
    const { location: { state: { cartProducts } } } = this.props;
    console.log(cartProducts);
    return (
      <div>
        <section className="list_Products">
          <h2>Revise seus produtos</h2>
          <ul>
            {
              Object.keys(cartProducts).map((key) => {
                const { product, quantity } = cartProducts[key];
                return (
                  <CartProduct
                    { ...product }
                    key={ product.id }
                    quantity={ quantity }
                  />
                );
              })
            }
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

Checkout.propTypes = {
  cartProducts: object,
}.isRequired;

export default Checkout;
