import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { arrayOf, shape, string, number, func } from 'prop-types';

import { TiArrowBack } from 'react-icons/ti';
import { MdRemoveShoppingCart } from 'react-icons/md';
import CartItem from '../components/CartItem';

import { changePriceToNumber } from '../utils/functions';

import styles from './styles.module.css';

export default function Cart(props) {
  const { cartList, changeQuantProductLength } = props;

  const prices = cartList
    .reduce((acc, { price, quant }) => (
      acc + (changePriceToNumber(price) * quant)
    ), 0);
  const [totalPrices, setTotalPrices] = useState(prices);
  const totalPrice = totalPrices === 0
    ? prices.toFixed(2)
    : totalPrices.toFixed(2);
  const totalPriceMessage = totalPrice === '0.00'
    ? ''
    : `Total: R$${totalPrice}`;

  const propsToCheckout = {
    pathname: '/checkout',
    state: { cartList, prices },
  };

  const getNewTotalPrice = ({ oldPrice, priceToHandle, symbol }) => {
    const sumOrSubtract = {
      '+': oldPrice + priceToHandle,
      '-': oldPrice - priceToHandle,
    };

    const newTotalPrice = sumOrSubtract[symbol];

    return newTotalPrice;
  };

  const handleChangeTotalPrice = (priceToHandle, symbol) => {
    const priceInfos = {
      oldPrice: Number(totalPrice),
      priceToHandle,
      symbol,
    };

    const newTotalPrice = getNewTotalPrice(priceInfos);

    setTotalPrices(newTotalPrice);
  };

  const renderCartList = () => {
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
            handleChangeTotalPrice={ handleChangeTotalPrice }
            changeQuantProductLength={ changeQuantProductLength }
          />
        ))
      : cartString;
  };

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
        { renderCartList() }
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
