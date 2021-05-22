import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromStorage } from '../services/localStorage';
import ShopCartItem from './ShopCartItem';

class ShopCart extends React.Component {
  shoppingCartProducts = () => {
    const keys = Object.keys(localStorage);
    const productsFromStorage = keys.map((key) => getProductsFromStorage(key));
    console.log(productsFromStorage);
    return (
      productsFromStorage
        .map((product) => (<ShopCartItem
          key={ product[0].id }
          product={ product[0] }
          quantity={ product.length }
        />))
    );
  }

  render() {
    return (
      <div>
        <ul>
          { this.shoppingCartProducts() }
        </ul>
        <image />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShopCart;
