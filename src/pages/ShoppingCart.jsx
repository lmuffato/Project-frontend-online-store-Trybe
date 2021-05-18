// Criação do componente
import React from 'react';
import { getAll } from '../services/shoppingCart';

export default class ShoppingCart extends React.Component {
  render() {
    // console.log(cartInfo);
    const storageCheck = async () => { await getAll(); };
    const storage = storageCheck();
    if (storage.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    // console.log(item.availableQuantity);
    return (
      <div>
        {
          console.log('TO CHEGANDO AQUI Ó!')
      //     storage.map((item) => (
      //       <div key={ item.title }>
      //         <p data-testid="shopping-cart-product-name">{item.title}</p>
      //         <img src={ item.thumbnail } alt={ item.thumbnailId } width="100px" />
      //         <p>
      //           R$
      //           {item.price}
      //         </p>
      //         <label htmlFor={ item.title }>
      //           Quantidade:
      //           <input
      //             type="number"
      //             min={ 0 }
      //             max={ item.availableQuantity }
      //             data-testid="shopping-cart-product-quantity"
      //             // onChange={ buyQuantity }
      //             id={ item.title }
      //           />
      //         </label>
      //       </div>
      //     ))
        }
      </div>
    );
  }
}
