import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import states from '../../utilities/states';
import OptionStates from '../OptionStates';

export default class BuyerData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateState = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { state } = this.state;
    return (
      <Form className="data-buyer">
        <Form.Label>Informações do comprador</Form.Label>
        <div className="user-info">
          <Form.Control
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
          <Form.Control
            className="cpf-mask"
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            maxLength={ 14 }
          />
          <Form.Control
            type="email"
            placeholder="E-mail"
            data-testid="checkout-email"
          />
          <Form.Control
            className="cel-sp-mask"
            type="tel"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
        </div>
        <div className="address-container">
          <Form.Control
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
          <Form.Control type="text" placeholder="Número" />
        </div>
        <Form.Control type="text" placeholder="Complemento" />
        <div className="user-location">
          <Form.Control placeholder="Cidade" />
          <Form.Control
            className="form-select"
            as="select"
            defaultValue={ state }
            name="state"
            onChange={ this.updateState }
          >
            {states.map(({ id, initials, name }) => (
              <OptionStates key={ id } initials={ initials } name={ name } />
            ))}
          </Form.Control>
          <Form.Control
            placeholder="CEP"
            data-testid="checkout-cep"
            className="cep-mask"
          />
        </div>
      </Form>
    );
  }
}
