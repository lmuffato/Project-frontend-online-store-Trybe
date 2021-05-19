import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import serviceCart from '../services/serviceCart';

class Cartitems extends Component {
  realValue = (price) => {
    const realPrice = `${(new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL' })
      .format(price))}`;
    return realPrice;
  };

  render() {
    const { cartItemList } = serviceCart;
    console.log(cartItemList);

    return (
      <div>
        <h1>CARRINHO DE COMPRAS</h1>
        <FaShoppingCart
          className="cart"
          color="#3BC18C"
          size="1.5rem"
          data-testid="shopping-cart-button"
        />
        {cartItemList.map(({ id, title, imagePath, price, quantity }) => (
          <div key={ id } className="cart-item-container">
            <img className="image-cart item-cart" src={ `https://http2.mlstatic.com/D_NQ_NP_${imagePath}-O.webp` } alt="imagem do produto" />
            <h4
              data-testid="shopping-cart-product-name"
              className="item-cart"
            >
              { title }
            </h4>
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            <p className="item-cart">{ this.realValue(price) }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cartitems;
