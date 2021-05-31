import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { IoMdBarcode } from 'react-icons/io';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';
import { arrayOf, shape, string, number, func } from 'prop-types';
import { inputsInfo, brazilStates, paymentWays } from '../services/data';

import styles from './styles.module.css';

export default class Checkout extends Component {
  renderCartList() {
    const { location } = this.props;
    const { cartList } = location.state;

    return cartList.map(({ title, img, price, quant }) => (
      <div className={ styles.checkoutItemContainer } key={ title }>
        <div className={ styles.checkoutImgItem }>
          <img src={ img } alt={ title } />
        </div>
        <div className={ styles.checkoutInfosItem }>
          <p>{title}</p>
          <div className={ styles.checkoutInfosNumb }>
            <p className={ styles.checkoutItemPrice }>
              {`R$ ${(price * quant).toFixed(2)}`}
            </p>
            <p>{quant}</p>
          </div>
        </div>
      </div>
    ));
  }

  renderFormElements() {
    return (
      <>
        {inputsInfo.map((inputInfo) => (
          <input
            className={ styles.inputInfo }
            key={ inputInfo.placeholder }
            { ...inputInfo }
          />
        ))}
        <select className={ styles.inputInfo }>
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
    const icons = {
      Boleto: <IoMdBarcode />,
      Visa: <FaCcVisa />,
      MasterCard: <FaCcMastercard />,
      Elo: <BsCreditCard />,
    };

    const checkMatch = (value) => icons[value];

    return paymentWays.map(({ value }) => (
      <label
        className={ styles.inputLabelRadio }
        htmlFor={ value }
        value={ value }
        key={ value }
      >
        {checkMatch(value)}
        <span>{value}</span>
        <input
          className={ styles.inputRadio }
          type="radio"
          id={ value }
          name="payment"
          value={ value }
        />
      </label>
    ));
  }

  renderSum =() => {
    const { location } = this.props;
    const { cartList } = location.state;

    return (cartList.reduce((acc, { price }) => {
      const converted = parseFloat(price);
      return ((acc + converted));
    }, 0));
  }

  render() {
    const { location, handleClickResetState } = this.props;
    const { prices } = location.state;
    return (
      <section className={ styles.checkoutContainer }>
        <div className={ styles.checkoutProducts }>
          <header>
            <Link to="/carrinho">
              <TiArrowBack />
            </Link>
            <h1>Revise seus produtos</h1>
          </header>
          { this.renderCartList() }
          <div className={ styles.checkoutTotal }>
            <span>Total:</span>
            <span>{`R$${prices.toFixed(2)}`}</span>
          </div>
        </div>

        <div className={ styles.checkoutCustomerInfos }>
          <h2>Informações do comprador</h2>
          <form>
            { this.renderFormElements() }
          </form>
        </div>

        <div className={ styles.checkoutPayment }>
          <h2>Método de Pagamento</h2>
          <fieldset className={ styles.radioButtons }>
            { this.renderCheckboxPayments() }
          </fieldset>
        </div>
        <button
          onClick={ handleClickResetState }
          className="checkoutButton"
          type="submit"
        >
          <Link to="/">
            Processar Pagamento
          </Link>
        </button>
      </section>
    );
  }
}

Checkout.propTypes = {
  handleClickResetState: func.isRequired,
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
