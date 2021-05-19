import React, { Component } from 'react';
import FullName from './formComponents/FullName';
import Email from './formComponents/Email';
import Cpf from './formComponents/Cpf';
import Phone from './formComponents/Phone';
import Cep from './formComponents/Cep';
import Address from './formComponents/Address';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChanges = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { fullName, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <form>
          <FullName value={ fullName } handleFunc={ this.handleChanges } />
          <Email value={ email } handleFunc={ this.handleChanges } />
          <Cpf value={ cpf } handleFunc={ this.handleChanges } />
          <Phone value={ phone } handleFunc={ this.handleChanges } />
          <Cep value={ cep } handleFunc={ this.handleChanges } />
          <Address value={ address } handleFunc={ this.handleChanges } />
        </form>
        <button type="button">COMPRAR</button>
      </div>
    );
  }
}

export default Form;
