// Criação do componente
import React from 'react';
import { getAll, quantityProduct } from '../services/shoppingCart';

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
      <div>
        {
          storage.map((item) => (
            <div key={ item.title }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <img src={ item.thumbnail } alt={ item.thumbnailId } width="100px" />
              <p>
                R$
                {item.price.toFixed(2)}
              </p>
              <label htmlFor={ item.title }>
                Quantidade:
                <input
                  type="number"
                  min={ 1 }
                  max={ item.availableQuantity }
                  defaultValue={ item.buyQuantity }
                  data-testid="shopping-cart-product-quantity"
                  onChange={ (event) => {
                    quantityProduct(event);
                    this.changeQuantity(event);
                  } }
                  id={ item.title }
                />
              </label>
            </div>
          ))
        }
        <p data-testid="shopping-cart-product-quantity">
          Quantidade de items no carrinho:
          {storage.length}
        </p>
      </div>
    );
  }
}
