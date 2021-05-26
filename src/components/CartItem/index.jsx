import React, { Component } from 'react';
import { shape, number, string, func } from 'prop-types';
import { changePriceToNumber } from '../../utils/functions';
import styles from './styles.module.css';

class CartItem extends Component {
  constructor(props) {
    super(props);

    const { quant, price, title, img, stock } = props.product;
    this.state = {
      quant,
      price,
      title,
      img,
      stock,
    };
  }

  getPrice = (price, quant) => (price * quant).toFixed(2);

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
    const { title } = this.state;

    this.setState(({ quant }) => {
      const { handleChangeTotalPrice, changeQuantProductLength } = this.props;

      const quantResult = this.getQuant(quant, symbol);
      const priceToNumber = changePriceToNumber(product.price);

      handleChangeTotalPrice(priceToNumber, symbol);
      changeQuantProductLength(quantResult, title);

      return { quant: quantResult };
    });
  };

  render() {
    const { quant, price, title, img, stock } = this.state;
    const priceToDisplay = this.getPrice(changePriceToNumber(price), quant);

    return (
      <section className={ styles.CartItemContainer }>
        <div className={ styles.CartImageContainer }>
          <img src={ img } alt={ title } />
        </div>

        <div className={ styles.CartInfoContainer }>
          <p data-testid="shopping-cart-product-name">{ title }</p>

          <div className={ styles.CartPriceQuantContainer }>
            <p>{ priceToDisplay }</p>

            <div>
              <button
                type="button"
                onClick={ this.changeProductQuantify }
                data-testid="product-decrease-quantity"
                disabled={ quant === 1 }
                style={ { color: 'var(--red-color-600)' } }
              >
                -
              </button>

              <p data-testid="shopping-cart-product-quantity">
                { quant }
              </p>

              <button
                type="button"
                onClick={ this.changeProductQuantify }
                data-testid="product-increase-quantity"
                style={ { color: 'var(--green-color-600)' } }
                disabled={ quant === stock }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

CartItem.propTypes = {
  product: shape({
    quant: number,
    price: string,
    title: string,
    img: string,
  }).isRequired,
  handleChangeTotalPrice: func.isRequired,
  changeQuantProductLength: func.isRequired,
};

export default CartItem;
