import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IoReturnUpBack } from 'react-icons/io5';
import BuyerData from '../components/form/BuyerData';
import PaymentMethods from '../components/form/PaymentMethods';
import ProductReview from '../components/ProductReview';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { cartItems } = this.props;
    return (
      <section className="checkout-page-container">
        <Link to="/">
          <button type="button" className="return-button" onClick={ this.backToHome }>
            <IoReturnUpBack className="return-icon" />
          </button>
        </Link>
        <div className="checkout-content">
          <div className="products-review">
            <p>Revise seus produtos</p>
            {Object.values(cartItems).map((cartItem, i) => (
              <ProductReview key={ i } product={ cartItem } />
            ))}
          </div>
          <div className="user-form">
            <BuyerData />
          </div>
          <div className="payment-methods-container">
            <PaymentMethods />
          </div>
          <div className="buy-button-container">
            <Button variant="primary">Comprar</Button>
          </div>
        </div>
      </section>
    );
  }
}
