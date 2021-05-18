import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { arrayOf, shape, string, number } from 'prop-types';

import CartItem from '../components/CartItem';

import changePriceToNumber from '../utils/functions';

class Cart extends Component {
  constructor(props) {
    super(props);

    const { cartList } = props;
    const prices = cartList
      .reduce((acc, { price }) => acc + Number(changePriceToNumber(price)), 0);

    console.log(cartList);

    this.state = {
      totalPrices: prices,
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
    const { cartList } = this.props;
    const cartString = 'Seu carrinho está vazio';
    return cartList.length > 0
      ? cartList
        .map((product, index) => (
          <CartItem
            key={ index }
            product={ product }
            handleChangeTotalPrice={ this.handleChangeTotalPrice }
          />
        ))
      : cartString;
  };

  render() {
    const { totalPrices } = this.state;

    return (
      <section data-testid="shopping-cart-empty-message">
        <button type="button"><Link to="/">Home</Link></button>
        { this.renderCartList() }
        <p>{`Valor Total da Compra ${totalPrices}`}</p>
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
};

export default Cart;
