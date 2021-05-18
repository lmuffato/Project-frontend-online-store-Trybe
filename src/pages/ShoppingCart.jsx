import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from '../components/ShoppingCartItem';

class ShoppingCart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
        {Object.keys(cartList).map((item) => (
          <ShoppingCartItem
            title={ cartList[item].title }
            price={ cartList[item].price }
            qty={ cartList[item].qty }
            thumbnail={ cartList[item].thumbnail }
            key={ item }
          />
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape({}).isRequired,
};

export default ShoppingCart;
