import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
<<<<<<< HEAD
import { FaBarcode } from 'react-icons/fa';
=======
// import { FaBarcode } from 'react-icons/fa';
>>>>>>> 3f101749f909928090fe548ee14148e9534efad7
import BuyerData from './form/BuyerData';
import PaymentCard from './form/PaymentCard';

export default class UserDataForm extends Component {
  render() {
    return (
      <Form>
        <BuyerData />
        <div className="payment-methods-container">
          <Form.Group controlId="ticket-method">
            <Form.Label>Boleto</Form.Label>
            <Form.Group className="payment-method">
              <Form.Check
                type="radio"
                name="payment-method"
                id="payment-ticket"
              />
<<<<<<< HEAD
              <FaBarcode className="payment-icon" />
=======
              {/* <FaBarcode className="payment-icon" /> */}
>>>>>>> 3f101749f909928090fe548ee14148e9534efad7
            </Form.Group>
          </Form.Group>
          <Form.Group controlId="card-method-container">
            <Form.Label>Cartão de crédito</Form.Label>
            <Form.Group className="payment-method">
              <PaymentCard />
            </Form.Group>
          </Form.Group>
        </div>
      </Form>
    );
  }
}
