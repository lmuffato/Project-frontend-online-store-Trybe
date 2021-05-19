import React, { Component } from 'react'

export default class ProductCheckout extends Component {

  constructor(){
    super();
    this.getItemsFromLocalStore = this.getItemsFromLocalStore.bind(this);
  }

  totalPrice(){
    let totalPrice = 0;
    JSON.parse(localStorage.getItem('cartItems'))
      .forEach((item) => {
        totalPrice += item.price * item.qtd
      })
      return totalPrice;
  }

  getItemsFromLocalStore() {
    // let totalPrice = 0;
    const itemsFromLocalStore = JSON.parse(localStorage.getItem('cartItems'))    
    .map((item) => {
      return <div>
        <img src={item.thumbnail} alt="Product Image"/>
        <div>Item: {item.title}</div>
        <div>Quantidade: {item.qtd}</div>
        <div>Preço: {item.price*item.qtd}</div>
        <hr></hr>
      </div>
    });
    return itemsFromLocalStore;
  }

  render() {
    return (
      <section>
        <div>
          <h1>
          Resumo de Compras:
        </h1>
        <h3>Revise seus produtos</h3>
        <hr></hr>
        {this.getItemsFromLocalStore()}
        <hr></hr>
        <strong>Preço Total: { this.totalPrice() }</strong>
        <hr></hr>
        </div>
        <div>Informacoes do Comprador</div>
        <div>Método de Pagamento:</div>
      </section>
    )
  }
}
