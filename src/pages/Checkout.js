import React from 'react';
import PropTypes from 'prop-types';
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
      bookmarkedOnly: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { cart } = this.props;
    const { fullName, email, cpf, phone, cep, address, bookmarkedOnly } = this.state;
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
            bookmarkedOnly={ bookmarkedOnly }
            handleChange={ this.handleChange }
          />
          {/* <button type="submit">Comprar</button> */}
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
