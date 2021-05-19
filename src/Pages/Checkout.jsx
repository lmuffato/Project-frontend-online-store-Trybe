import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  showProductsInCart = () => {
    const { productsInCart } = this.props;
    const listCart = Object.values(productsInCart);
    let total = 0;
    const showProductsInCartFunc = listCart
      .map((product) => {
        total += product.price * product.productQuantity;
        return (
          <li key={ product.id } className="conteiner-item">
            <img src={ product.thumbnail } alt="" className="imgCart" />
            <span
              className="title-item"
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </span>
            <span
              data-testid="shopping-cart-product-quantity"
              className="quantity-item"
            >
              {product.productQuantity}
            </span>
            <span>
              R$
              <span>{ product.price * product.productQuantity }</span>
            </span>
          </li>);
      });
    return (
      <section className="productListContainer">
        {showProductsInCartFunc}
        <span>{`total: ${total}`}</span>
      </section>
    );
  }

  render() {
    return (
      <div>
        <h1>checkout</h1>
        {this.showProductsInCart()}
        <form action="">
          <label htmlFor="fullName">
            Nome Completo
            <input name="fullName" data-testid="checkout-fullname" />
          </label>

          <label htmlFor="email">
            Email
            <input name="email" data-testid="checkout-email" />
          </label>

          <label htmlFor="cpf">
            CPF
            <input name="cpf" data-testid="checkout-cpf" />
          </label>

          <label htmlFor="phone">
            Telefone
            <input name="phone" data-testid="checkout-phone" />
          </label>

          <label htmlFor="cep">
            CEP
            <input name="cep" data-testid="checkout-cep" />
          </label>

          <label htmlFor="address">
            Endereço
            <input name="address" data-testid="checkout-address" />
          </label>

          <button type="button">Finalizar Compra</button>
        </form>
        <PaymentMethod />
      </div>
    );
  }
}

Checkout.propTypes = {
  productsInCart: PropTypes.objectOf(PropTypes.shape({
    productQuantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default Checkout;
