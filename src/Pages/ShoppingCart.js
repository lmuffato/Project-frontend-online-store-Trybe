import React from 'react';
import { shape, string, number, func } from 'prop-types';

import CartProduct from '../Components/CartProduct';
import EmptyCart from '../Components/EmptyCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { cart } } } = props;

    const filteredCart = cart.reduce((filtered, product) => {
      const { id } = product;
      const filter = filtered;

      if (id in filter) {
        const { quantity, product: previousProduct } = filter[id];
        filter[id] = { product: { ...previousProduct }, quantity: quantity + 1 };
        return filter;
      }

      filter[id] = { product: { ...product }, quantity: 1 };
      return filter;
    }, {});

    this.state = {
      cartProducts: filteredCart,
    };
  }

  render() {
    const { history: { goBack } } = this.props;
    const { cartProducts } = this.state;
    const isCartEmpty = Object.keys(cartProducts).length;

    return (
      <div className="shopping-cart-container">
        <button type="button" onClick={ goBack }>
          <img
            className="back"
            src="https://image.flaticon.com/icons/png/512/64/64516.png"
            alt="voltar"
          />
        </button>

        <header className="shopping-cart-header">
          <img
            className="shopping-cart-icon"
            src="https://image.flaticon.com/icons/png/128/833/833314.png"
            alt="carrinho de compras"
          />
          <h3>Carrinho de compras</h3>
        </header>

        {
          !isCartEmpty ? <EmptyCart />
            : Object.keys(cartProducts).map((key) => {
              const { product, quantity } = cartProducts[key];
              return (
                <CartProduct
                  { ...product }
                  key={ product.id }
                  quantity={ quantity }
                />
              );
            })
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: shape({
    state: shape({
      title: string,
      id: string,
      price: number,
      thumbnail: string,
    }),
  }).isRequired,
  history: shape({
    goBack: func,
  }).isRequired,
};

export default ShoppingCart;
