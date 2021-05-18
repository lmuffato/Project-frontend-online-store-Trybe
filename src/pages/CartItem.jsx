import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { arrayOf, shape, string, number, func } from 'prop-types';

import CartList from '../components/CartList';

import changePriceToNumber from '../utils/functions';

class CartItem extends Component {
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
      '+': oldPrice + priceToHandle,
      '-': oldPrice - priceToHandle,
    };

    const newTotalPrice = sumOrSubtract[symbol];

    return newTotalPrice < 0 ? 0 : newTotalPrice;
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
    const cartString = 'Seu carrinho está vazio';
    return cartList.length > 0
      ? cartList
        .map((product, index) => (
          <CartList
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

    return (
      <section data-testid="shopping-cart-empty-message">
        <button type="button"><Link to="/">Home</Link></button>

        { this.renderCartList() }

        <p>{`Valor Total da Compra ${totalPrices.toFixed(2)}`}</p>

        <Link to={ { ...propsToCheckout } }>
          <button
            type="button"
            data-testid="checkout-products"
          >
            Finalizar compra
          </button>
        </Link>

      </section>
    );
  }
}

CartItem.propTypes = {
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

export default CartItem;
