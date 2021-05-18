import React, { Component } from 'react';
import { shape, number, string, func } from 'prop-types';
import changePriceToNumber from '../utils/functions';

class CartList extends Component {
  constructor(props) {
    super(props);

    const { quant, price, title, img } = props.product;

    this.state = {
      quant,
      price,
      title,
      img,
    };
  }

  getPrice(priceToNumber, quant) {
    return (priceToNumber * quant).toFixed(2);
  }

  getQuant(quant, symbol) {
    const sumOrSubtract = {
      '+': quant + 1,
      '-': quant - 1,
    };

    return sumOrSubtract[symbol];
  }

  changeProductQuantify = ({ target }) => {
    const symbol = target.innerHTML;
    const { product } = this.props;

    this.setState((oldState) => {
      const { quant } = oldState;
      const { handleChangeTotalPrice } = this.props;

      const quantResult = this.getQuant(quant, symbol);

      const priceToNumber = changePriceToNumber(product.price);
      const priceResult = this.getPrice(priceToNumber, quantResult);

      handleChangeTotalPrice(priceToNumber, symbol);

      return { quant: quantResult, price: `R$${priceResult}` };
    });
  };

  render() {
    const { quant, price, title, img } = this.state;

    return (
      <div>
        <img src={ img } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>

        <div>
          <button
            type="button"
            onClick={ this.changeProductQuantify }
            data-testid="product-decrease-quantity"
          >
            -
          </button>

          <p data-testid="shopping-cart-product-quantity">{ quant }</p>

          <button
            type="button"
            onClick={ this.changeProductQuantify }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>

        <p>{ price }</p>
      </div>
    );
  }
}

CartList.propTypes = {
  product: shape({
    quant: number,
    price: string,
    title: string,
    img: string,
  }).isRequired,
  handleChangeTotalPrice: func.isRequired,
};

export default CartList;
