import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  renderInputName = () => (
    <div>
      <label htmlFor="fullName">
        Nome completo
        <input data-testid="checkout-fullname" name="fullName" type="text" />
      </label>
    </div>
  )

  renderInputEmail = () => (
    <div>
      <label htmlFor="eMail">
        E-mail
        <input data-testid="checkout-email" name="eMail" type="text" />
      </label>
    </div>
  )

  renderInputCPF = () => (
    <div>
      <label htmlFor="CPF">
        CPF
        <input data-testid="checkout-cpf" name="CPF" type="text" />
      </label>
    </div>
  )

  renderInputPhone = () => (
    <div>
      <label htmlFor="phoneNumber">
        Telefone
        <input data-testid="checkout-phone" name="phoneNumber" type="text" />
      </label>
    </div>
  )

  renderInputCEP = () => (
    <div>
      <label htmlFor="CEP">
        CEP
        <input data-testid="checkout-cep" name="CEP" type="text" />
      </label>
    </div>
  )

  renderInputAddress = () => (
    <div>
      <label htmlFor="Address">
        Endereço
        <input data-testid="checkout-address" name="Address" type="text" />
      </label>
    </div>
  )

  renderOrder = () => {
    const { cart } = this.state;
    return (
      <div>
        { cart
          .map((item, index) => (
            <p key={ index }>
              {`${item.product.title} ${item.quantity * parseFloat(item.product.price)} `}
            </p>
          ))}
      </div>
    );
  }

  fetchCart = () => {
    const { location: { state } } = this.props;
    this.setState({ cart: state });
  }

  render() {
    return (
      <div>
        { this.renderOrder()}
        { this.renderInputName()}
        { this.renderInputEmail()}
        { this.renderInputCPF()}
        { this.renderInputPhone()}
        { this.renderInputCEP()}
        { this.renderInputAddress()}

      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(Object),
  }).isRequired,
};

export default Checkout;
