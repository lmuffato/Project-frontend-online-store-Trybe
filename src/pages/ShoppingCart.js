import React, { Component } from 'react';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: /* false */ true,
    };
  }

  render() {
    const { cartProducts } = this.state;
    const productsObject = [
      { name: 'Ventilador', value: 39.99, imgPath: 'https://i.mlcdn.com.br/1500x1500/020458900.jpg' },
      { name: 'Fantasma de Pelúcia', value: 20.00, imgPath: 'https://a-static.mlcdn.com.br/618x463/almofada-emoji-40cm-fantasma-pelucia-socriativos/socriativos/1055741149/303cc3507c9f6e9b7af5181f9f93ef28.jpg' },
      { name: 'Desentupidor', value: 9.99, imgPath: 'https://casatoni.vteximg.com.br/arquivos/ids/157584-1000-1000/Desentupidor-Sanitario-Grande-Bt479.jpg?v=636443492590700000' },
    ];

    return (
      <div>
        { cartProducts
          ? productsObject.map((product, index) => (<CartProduct key={ index } products={ product } />))
          : <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> }
        <div>Valor Total da Compra: </div>
      </div>
    );
  }
}
