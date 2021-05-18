import React, { Component } from 'react';

class CartContent extends Component {
  render() {
    const emptyCart = (
      <section style={ { textAlign: 'center' } }>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
          <br />
          <img
            style={ { width: '100px' } }
            src="./images/emptyCart.png"
            alt="Carrinho vázio"
          />
        </p>
      </section>);

    const { items } = this.props;
    console.log(items);
    const cartItems = items.map((item) => (
      <section
        data-testid="product"
        key={ item.id }
      >
        <h2>{item.title}</h2>
        <img
          src={ item.thumbnail }
          alt={ `Produto ${item.title}` }
        />
        <h2>{item.price}</h2>
      </section>));
    return items.length ? cartItems : emptyCart;
  }
}
export default CartContent;
