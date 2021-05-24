import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { IoReturnUpBack } from 'react-icons/io5';
import PropTypes from 'prop-types';
import PaymentMethods from '../components/form/PaymentMethods';
import BuyerData from '../components/form/BuyerData';
import ProductsReview from '../components/ProductsReview';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartItems } = this.props;
    // const products = Object.values(cartItems);
    return (
      <div>
        <Link to="/" className="return-button">
          <IoReturnUpBack className="return-icon" />
        </Link>
        <section className="checkout-page-container">
          <div className="checkout-content">
            <div className="products-review-container">
              <p>Revise seus produtos</p>
              <ProductsReview cartItems={ cartItems } />
            </div>
            <Form className="user-form">
              <BuyerData />
            </Form>
            <div className="payment-methods-container">
              <PaymentMethods />
            </div>
            <div className="buy-button-container">
              <Button variant="primary">Comprar</Button>
            </div>
          </div>
          <div className="order-summary">
            {/* <h5>resumo do pedido</h5>
            <table>
              <tbody>
                <tr>
                  <th>{`${products.length} ${products.length > 1 ? 'produtos' : 'produto'}`}</th>
                  <th></th>
                </tr>
              </tbody>
            </table> */}
          </div>
        </section>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.object,
}.isRequired;
