import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Checkout extends Component {
  constructor(props) {
    super(props);
    const { products, quantity } = this.props;
    this.state = {
      products,
      quantity,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.sumTotal();
  }

  verifyCheckout = () => {
    const { products } = this.props;
    if (products.length === 0) {
      return (
        <p><strong>Sem produtos no carrinho</strong></p>
      );
    }
  }

  sumTotal = () => {
    // const price = event.target.getAttribute('data-price');
    const { products, quantity } = this.props;
    let newValue = 0;
    products.forEach((element) => {
      newValue += (parseFloat(element.price) * quantity[element.value]);
    });
    console.log(newValue);
    this.setState({
      totalPrice: newValue.toFixed(2),
    });
  }

  render() {
    /* const { products, quantity } = this.props; */
    const { products, quantity, totalPrice } = this.state;
    return (
      <div className="div-checkout">
        <button type="button">
          <Link to="/cart-shopping">Voltar</Link>
        </button>
        <div className="div-review-order">
          <p>Revise seus produtos</p>
          <div>
            { this.verifyCheckout() }
            <ul>
              {products.map((element, index) => (
                <li key={ index }>
                  {element.value}
                  <span className="quantity-order">
                    { `(${quantity[element.value]})`}
                  </span>
                </li>))}
            </ul>
          </div>
          <p>
            Total: R$
            <span className="total-order">
              { totalPrice }
            </span>
          </p>
        </div>
        <form>
          <fieldset className="form-checkout">
            Informações do comprador
            <div>
              <input
                type="text"
                data-testid="checkout-fullname"
                placeHolder="Nome completo"
              />
              <input
                type="email"
                data-testid="checkout-email"
                placeHolder="E-mail"
              />
              <input
                type="text"
                data-testid="checkout-cpf"
                placeHolder="CPF"
              />
              <input
                type="text"
                data-testid="checkout-phone"
                placeHolder="Telefone"
              />
            </div>
            <div>
              <input
                type="text"
                data-testid="checkout-address"
                placeHolder="Endereço"
              />
              <input
                type="text"
                data-testid="checkout-cep"
                placeHolder="CEP"
              />
            </div>
          </fieldset>
        </form>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantity: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Checkout;
