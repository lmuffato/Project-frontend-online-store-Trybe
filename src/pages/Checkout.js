import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import BuyerInformation from './Home/components/BuyerInformation';
import PurchaseSummary from './Home/components/PurchaseSummary';
import Payment from './Home/components/Payment';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: '',
      cpf: '', // Number
      phone: '', // Number
      cep: '', // Number
      address: '',
      status: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.setState({ status: true });
  }

  render() {
    const { cart } = this.props;
    const { fullName, email, cpf, phone, cep, address, status } = this.state;
    if (status) return <Redirect to="/" />;

    return (
      <div>
        <form>
          <PurchaseSummary cart={ cart } />
          <BuyerInformation
            fullName={ fullName }
            email={ email }
            cpf={ cpf }
            phone={ phone }
            cep={ cep }
            address={ address }
            handleChange={ this.handleChange }
          />
          <Payment
            handleChange={ this.handleChange }
          />
          <button type="button" onClick={ this.handleSubmit }>Comprar</button>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
