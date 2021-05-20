import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromStorage } from '../services/localStorage';

class ShopCart extends React.Component {
  render() {
    const products = getProductsFromStorage();
    return (
      <div>
        <ul>
          {
            products.map((item) => (
              <li key={ item.id }>
                <p data-testid="shopping-cart-product-name">{item.title}</p>
                <img src={ item.thumbnail } alt={ `imagem do produto ${item.title}` } />
                <p>{`R$${parseFloat(item.price).toFixed(2)}`}</p>
              </li>
            ))
          }
        </ul>
        <image />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShopCart;
