import React, { Component } from 'react';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const productsObject = {
      1: { name: 'Ventilador', value: 39.99, imgPath: 'https://i.mlcdn.com.br/1500x1500/020458900.jpg', id: 1 },
      2: { name: 'Fantasma de Pelúcia', value: 20.00, imgPath: 'https://a-static.mlcdn.com.br/618x463/almofada-emoji-40cm-fantasma-pelucia-socriativos/socriativos/1055741149/303cc3507c9f6e9b7af5181f9f93ef28.jpg', id: 2 },
      3: { name: 'Desentupidor', value: 9.99, imgPath: 'https://casatoni.vteximg.com.br/arquivos/ids/157584-1000-1000/Desentupidor-Sanitario-Grande-Bt479.jpg?v=636443492590700000', id: 3 },
    };

    this.state = {
      cartProducts: /* false */ true,
      products: productsObject,
    };
  }

  deleteItem = (event) => {
    const { id } = event.target;
    const { products } = this.state;
    const items = Array.from(products).find((item) => Object.keys(products) === id ));
    console.log('sou eu', id, items);
    // this.setState({ products: items });
  }

  render() {
    const { cartProducts, products } = this.state;

    return (
      <div>
        { cartProducts
          ? products.map(
            (product, index) => <CartProduct key={ index } products={ product } deleteItem={ this.deleteItem } id={ product.id } />
          )
          : <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> }
        <div>Valor Total da Compra: </div>
      </div>
    );
  }
}
