import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.btnFunction = this.btnFunction.bind(this);

    this.state = {
      cartArray: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  emptyMsg() {
    return (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );
  }

  loadCart(obj) {
    return obj.map((item) => (
      <section key={ item.id }>
        <img src={ item.thumbnail } width="100px" alt="item.title" />
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name="-"
          value={ item.id }
          onClick={ this.btnFunction }
        >
          -
        </button>

        <span data-testid="shopping-cart-product-quantity">{item.qtd}</span>

        <button
          data-testid="product-increase-quantity"
          type="button"
          name="+"
          value={ item.id }
          onClick={ this.btnFunction }
        >
          +
        </button>
        R$
        {item.price * item.qtd}
      </section>
    ));
  }

  totalValue(obj) {
    let result = 0;
    obj.forEach((item) => {
      result += item.price * item.qtd;
    });
    return result;
  }

  btnFunction({ target }) {
    const { name } = target;
    const { cartArray } = this.state;
    const newArray = cartArray;

    for (let i = 0; i < cartArray.length; i += 1) {
      if (cartArray[i].id === target.value) {
        if (name === '+') {
          newArray[i].qtd += 1;
        }
        if (name === '-' && newArray[i].qtd > 0) {
          newArray[i].qtd -= 1;
        }
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(newArray));
    this.setState({ cartArray: newArray });
  }

  render() {
    const { cartArray } = this.state;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <section>
          { cartArray ? this.loadCart(cartArray) : this.emptyMsg() }
        </section>
        { cartArray
          ? <h3>{`Valor total da Compra: ${this.totalValue(cartArray)}`}</h3> : ''}
      </div>
    );
  }
}
