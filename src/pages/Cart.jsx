import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { arrayOf, shape, string, number, func } from 'prop-types';

import { TiArrowBack } from 'react-icons/ti';
import { MdRemoveShoppingCart } from 'react-icons/md';
import CartItem from '../components/CartItem';

import { changePriceToNumber } from '../utils/functions';

import styles from './styles.module.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    const { cartList } = props;
    const prices = cartList
      .reduce((acc, { price }) => acc + changePriceToNumber(price), 0);

    this.state = {
      totalPrices: prices,
      cartList,
    };
  }

  getNewTotalPrice({ oldPrice, priceToHandle, symbol }) {
    const sumOrSubtract = {
      // ALERTA GAMBIARRA
      '+': (oldPrice + priceToHandle) - (priceToHandle / 2),
      '-': (oldPrice - priceToHandle) + (priceToHandle / 2),
    };

    const newTotalPrice = sumOrSubtract[symbol];

    return newTotalPrice;
  }

  handleChangeTotalPrice = (priceToHandle, symbol) => {
    this.setState((oldState) => {
      const priceInfos = {
        oldPrice: Number(oldState.totalPrices),
        priceToHandle,
        symbol,
      };

      const newTotalPrice = this.getNewTotalPrice(priceInfos);

      return { totalPrices: newTotalPrice };
    });
  }

  renderCartList = () => {
    const { cartList, changeQuantProductLength } = this.props;
    const cartString = (
      <div className={ styles.EmptyCartContainer }>
        <p>Seu carrinho está vazio</p>
        <MdRemoveShoppingCart />
      </div>
    );

    return cartList.length > 0
      ? cartList
        .map((product, index) => (
          <CartItem
            key={ index }
            product={ product }
            handleChangeTotalPrice={ this.handleChangeTotalPrice }
            changeQuantProductLength={ changeQuantProductLength }
          />
        ))
      : cartString;
  };

  render() {
    const { totalPrices, cartList } = this.state;
    const propsToCheckout = {
      pathname: '/checkout',
      state: { cartList, totalPrices },
    };
    const totalPriceMessage = totalPrices === 0
      ? ''
      : `Total: R$${totalPrices.toFixed(2)}`;

    return (
      <section
        className={ styles.CartItemsContainer }
        data-testid="shopping-cart-empty-message"
      >
        <header>
          <Link to="/">
            <TiArrowBack />
          </Link>
          <h1>Carrinho</h1>
        </header>

        <main>
          { this.renderCartList() }
        </main>

        <hr />

        <p>{totalPriceMessage}</p>

        <Link to={ { ...propsToCheckout } }>
          <button
            type="button"
            data-testid="checkout-products"
            className={ styles.FinishButton }
            disabled={ cartList.length === 0 }
          >
            Finalizar compra
          </button>
        </Link>

      </section>
    );
  }
}

Cart.propTypes = {
  cartList: arrayOf(shape(
    {
      img: string,
      price: string,
      quant: number,
      title: string,
    },
  )).isRequired,
  changeQuantProductLength: func.isRequired,
};

export default Cart;
