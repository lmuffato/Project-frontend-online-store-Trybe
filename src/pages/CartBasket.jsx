import React, { Component } from 'react';

class CartBasket extends Component {
  emptyCart = () => (
    <span
      data-testid="shopping-cart-empty-message"
    >
      Seu carrinho está vazio
    </span>);

  cartList = (products) => products.map((product) => (
    <div key={ product.id }>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.thumbnail}</p>
    </div>))

  render() {
    const { location } = this.props;
    const { state: products } = location;
    return (
      <main>
        {products.length > 0 ? this.cartList(products) : this.emptyCart() }
      </main>
    );
  }
}

export default CartBasket;
