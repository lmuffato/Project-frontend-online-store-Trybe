import React from 'react';
import { shape, string, number } from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state: { cart } } } = this.props;
    if (cart.length === 0) {
      const empty = <h4 data-testid="shopping-cart-empty-message">Carrinho vazio</h4>;
      return empty;
    }
    return (
      <ul>
        {cart.map((prod) => <li key={ prod.id }>{prod.title}</li>)}
      </ul>
    );
  }
}

ShoppingCart.propTypes = {
  location: shape({
    state: shape({
      title: string,
      price: number,
      thumbnail: string,
    }),
  }).isRequired,
};

export default ShoppingCart;
