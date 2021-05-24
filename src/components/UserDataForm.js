import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FaBarcode } from 'react-icons/fa';
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
              <FaBarcode className="payment-icon" />
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
