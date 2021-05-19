import React, { Component } from 'react';
import { oneOfType, objectOf, object, array, string, number, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosAdd, IoIosRemove, IoIosTrash } from 'react-icons/io';

class CartBasket extends Component {
  emptyCart = () => (
    <span
      data-testid="shopping-cart-empty-message"
    >
      Seu carrinho está vazio
    </span>);

  cartList = (products, increaseQuantity, decreaseQuantity, removeCartItem) => (
    products.map((product) => {
      const { id, title, quantity, price } = product;
      return (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <IoIosRemove
            data-testid="product-decrease-quantity"
            onClick={ () => decreaseQuantity(id) }
          />
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          <IoIosAdd
            data-testid="product-increase-quantity"
            onClick={ () => increaseQuantity(id) }
          />
          <p>{(quantity * price).toFixed(2)}</p>
          <IoIosTrash onClick={ () => removeCartItem(id) } />
        </div>);
    }));

  render() {
    const { increaseQuantity,
      decreaseQuantity, removeCartItem, shoppingCart } = this.props;
    // const { state: products } = location;
    return (
      <main>
        {shoppingCart.length > 0
          ? this.cartList(shoppingCart,
            increaseQuantity, decreaseQuantity, removeCartItem)
          : this.emptyCart() }
        <Link to="/">Voltar</Link>
      </main>
    );
  }
}

CartBasket.propTypes = {
  shoppingCart: objectOf(oneOfType([string, number, object, array])).isRequired,
  increaseQuantity: func.isRequired,
  decreaseQuantity: func.isRequired,
  removeCartItem: func.isRequired,
};

export default CartBasket;
