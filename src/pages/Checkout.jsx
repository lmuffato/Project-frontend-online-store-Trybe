import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  constructor() {
    super();
    this.calculateFinalPrice = this.calculateFinalPrice.bind(this);
  }

  calculateFinalPrice(items, quantities) {
    let product = 0;
    items.forEach((item) => {
      product += (item.price * quantities[item.id]);
    });
    const roundProduct = Number(`${Math.round(`${product}e2`)}e-2`);
    // Meu Grande amigo pra essas horas de arredondar : https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
    return roundProduct;
  }

  render() {
    const { location: { state } } = this.props;
    const { filteredItems, IDsAndQuantities, redirectNow } = state;
    const finalPrice = (
      <>
        <span>Preço Total:</span>
        {this.calculateFinalPrice(filteredItems, IDsAndQuantities)}
      </>);
    const itemsToBuy = (filteredItems.map((item, index) => (
      <>
        <img key={ item.id } src={ item.thumbnail } alt={ item.title } />
        <h2>{item.title}</h2>
        {index === filteredItems.length - 1
          ? <h2>{ finalPrice }</h2>
          : null }
      </>)));
    console.log(filteredItems, IDsAndQuantities, redirectNow);
    return (
      <div>
        <h1>
          Finalização de compra:
        </h1>
        {redirectNow ? itemsToBuy : null }
        <fieldset>
          <label htmlFor="fullname">
            Nome Completo:
            <input name="fullname" data-testid="checkout-fullname" type="text" />
          </label>
          <label htmlFor="email">
            Email:
            <input name="email" data-testid="checkout-email" type="text" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input name="cpf" data-testid="checkout-cpf" type="text" />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input name="phone" data-testid="checkout-phone" type="text" />
          </label>
          <br />
          <label htmlFor="cep">
            CEP:
            <input name="cep" data-testid="checkout-cep" type="text" />
          </label>
          <label htmlFor="address">
            Endereço:
            <input name="address" data-testid="checkout-address" type="text" />
          </label>
        </fieldset>
        <fieldset />
      </div>);
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
    }),
  }),
}.isRequired;

export default Checkout;
