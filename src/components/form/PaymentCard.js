import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class PaymentCard extends Component {
  render() {
    return (
      <Form.Group className="card-method-container">
        <Form.Group className="payment-method">
          <Form.Check
            type="radio"
            name="payment-method"
            id="visa-card"
          />
          <Form.Label htmlFor="visa-card">Visa</Form.Label>
          <i className="bi bi-credit-card payment-icon" />
        </Form.Group>
        <Form.Group className="payment-method">
          <Form.Check
            type="radio"
            name="payment-method"
            id="master-card"
          />
          <Form.Label htmlFor="master-card">MasterCard</Form.Label>
          <i className="bi bi-credit-card payment-icon" />
        </Form.Group>
        <Form.Group className="payment-method">
          <Form.Check
            type="radio"
            name="payment-method"
            id="elo-card"
          />
          <Form.Label htmlFor="elo-card">Elo</Form.Label>
          <i className="bi bi-credit-card payment-icon" />
        </Form.Group>
      </Form.Group>
    );
  }
}
