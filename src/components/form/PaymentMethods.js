import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FaBarcode } from 'react-icons/fa';
import PaymentCard from './PaymentCard';

export default class PaymentMethods extends Component {
  render() {
    return (
      <Form className="payment-methods-content">
        <Form.Group className="ticket-method">
          <Form.Label htmlFor="payment-ticket">Boleto</Form.Label>
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
          <PaymentCard />
        </Form.Group>
      </Form>
    );
  }
}
