import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromStorage } from '../services/localStorage';

class ShopCart extends React.Component {
  shoppingCartProducts = () => {
    const keys = Object.keys(localStorage);
    const productsFromStorage = keys.map((key) => getProductsFromStorage(key));
    return (
      productsFromStorage.map((product) => (
        <li key={ product[0].id }>
          <p data-testid="shopping-cart-product-name">{product[0].title}</p>
          <img
            src={ product[0].thumbnail }
            alt={ `imagem do produto ${product[0].title}` }
          />
          <p>{`R$${parseFloat(product[0].price).toFixed(2)}`}</p>
          <p data-testid="shopping-cart-product-quantity">
            {`Quantidade: ${product.length}`}
          </p>
        </li>
      ))
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
