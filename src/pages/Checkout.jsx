import React, { Component } from 'react';

import { arrayOf, shape, string, number } from 'prop-types';
import { inputsInfo, brazilStates, paymentWays } from '../services/data';

export default class Checkout extends Component {
  renderCartList() {
    const { location } = this.props;
    const { cartList } = location.state;

    return cartList.map(({ title, img, price, quant }) => (
      <div key={ title }>
        <img src={ img } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
        <p>{quant}</p>
      </div>
    ));
  }

  renderFormElements() {
    return (
      <>
        {inputsInfo.map((inputInfo) => (
          <input
            key={ inputInfo.placeholder }
            { ...inputInfo }
          />
        ))}
        <select>
          {brazilStates.map(({ ID, Nome, Sigla }) => {
            const stateOption = (
              <option
                key={ ID }
                value={ Sigla }
              >
                {Nome}
              </option>
            );

            const disabledAttribute = (
              <option
                key={ ID }
                value={ Sigla }
                hidden
              >
                {Nome}
              </option>
            );

            if (ID === '0') return disabledAttribute;
            return stateOption;
          })}
        </select>
      </>
    );
  }

  renderCheckboxPayments() {
    return paymentWays.map(({ value }) => (
      <label
        htmlFor={ value }
        value={ value }
        key={ value }
      >
        {value}
        <input
          type="radio"
          id={ value }
          name="payment"
          value={ value }
        />
      </label>
    ));
  }

  render() {
    return (
      <section>
        <div>
          <h1>Revise seus produtos</h1>
          <div>
            { this.renderCartList() }
          </div>

          <div>
            <h1>Informação do comprador</h1>
            <form>
              { this.renderFormElements() }
            </form>
          </div>

          <div>
            <h1>Método de Pagamento</h1>
            { this.renderCheckboxPayments() }
          </div>
        </div>
      </section>
    );
  }
}

Checkout.propTypes = {
  location: shape({
    state: shape({
      cartList: arrayOf(shape({
        img: string,
        price: string,
        quant: number,
        title: string,
      })),
    }),
  }).isRequired,
};
