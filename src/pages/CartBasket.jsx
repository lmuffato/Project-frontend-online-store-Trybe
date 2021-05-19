import React, { Component } from 'react';
import { oneOfType, objectOf, object, array, string, number } from 'prop-types';
import { Link } from 'react-router-dom';

class CartBasket extends Component {
  emptyCart = () => (
    <span
      data-testid="shopping-cart-empty-message"
    >
      Seu carrinho está vazio
    </span>);

  cartList = (products) => products.map((product) => (
    <div key={ product.id }>
      <p data-testid="shopping-cart-product-name">{product.title}</p>
      <p>{product.price}</p>
      <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
    </div>));

  render() {
    const { location } = this.props;
    const { state: products } = location;
    return (
      <main>
        {products.length > 0 ? this.cartList(products) : this.emptyCart() }
        <Link to="/">Voltar</Link>
      </main>
    );
  }
}

CartBasket.propTypes = {
  location: objectOf(oneOfType([string, number, object, array])).isRequired,
};

export default CartBasket;
