// Criação do componente
import React from 'react';
import { getAll, quantityProduct } from '../services/localStorage';
import backArrow from '../imagens/backArrow.svg';
import '../styles/ShoppingCart.css';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = { value: 1 };
  }

  changeQuantity = ({ target }) => { this.setState({ value: target.value }); }

  render() {
    const { value } = this.state;
    const storageCheck = () => getAll();
    const storage = storageCheck();
    if (storage === null) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    console.log(storage);
    return (
      <div className="product-cart">
        <div className="shopping-cart-heading">
          <img src={ backArrow } alt="Seta de voltar" className="backArrow-image" />
          <p
            data-testid="shopping-cart-product-quantity"
            className="shopping-cart-product-quantity"
          >
            { 'Quantidade de items no carrinho: ' }
            {storage.length}
          </p>
        </div>
        <div className="shopping-cart-container">
          {
            storage.map((item) => (
              <div key={ item.title } className="shopping-cart-product">
                <p
                  data-testid="shopping-cart-product-name"
                  className="shopping-cart-product-name"
                >
                  {item.title}
                </p>
                <img src={ item.thumbnail } alt={ item.thumbnailId } width="100px" />
                <p>
                  Preço unitário:
                  { ` ${item.standardPrice}` }
                </p>
                <p>
                  Subtotal
                  { item.buyQuantity > 1
                    ? ` (${item.buyQuantity} itens)`
                    : ` (${value} item)` }
                  : R$
                  {item.price === null ? item.standardPrice : item.price.toFixed(2)}
                </p>
                <label htmlFor={ item.title }>
                  { 'Quantidade: ' }

                  <button
                    type="button"
                    name="sub"
                    onClick={ (event) => quantityProduct(event) }
                  >
                    -
                  </button>
                  <input
                  // Mudar o tipo do input para tipo text, criar os botões com onClick e criar funções de acréscimo e decréscimo que irão alterar o defaultValue do input, e criar no botão do X o remove do localStorage
                    type="text"
                    defaultValue={ item.buyQuantity }
                    onChange={ (event) => {
                      // quantityProduct(event);
                      this.changeQuantity(event);
                    } }
                    id={ item.title }
                  />
                  <button
                    type="button"
                    name="add"
                    onClick={ (event) => quantityProduct(event) }
                  >
                    +
                  </button>
                </label>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
