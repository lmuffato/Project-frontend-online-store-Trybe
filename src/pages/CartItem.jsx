import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import CartList from '../components/CartList';

import changePriceToNumber from '../utils/functions';

class CartItem extends Component {
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
    const string = 'Seu carrinho está vazio';
    return cartList.length > 0
      ? cartList
        .map((product, index) => (
          <CartList
            key={ index }
            product={ product }
            handleChangeTotalPrice={ this.handleChangeTotalPrice }
          />
        ))
      : string;
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

CartItem.propTypes = {
  cartList: PropTypes.arrayOf().isRequired,
};

export default CartItem;
