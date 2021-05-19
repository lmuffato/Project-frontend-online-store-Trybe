// implement AddMovie component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changeQuantity = ({ target: { value, name } }) => {
    const { handle, productsInCart } = this.props;
    const product = productsInCart[name];
    const addQuantity = parseInt(`${value}1`, 10);
    const { productQuantity } = product;
    if (productQuantity > 1 || value === '+') handle(product, addQuantity);
  };

  deleteItem = ({ target: { value } }) => {
    const { handle, productsInCart } = this.props;
    const productToDeleted = productsInCart[value];
    handle(productToDeleted, 0, true);
  };

  showProductsInCart = () => {
    const { productsInCart } = this.props;
    const listCart = Object.values(productsInCart);
    const emptyMessage = 'Seu carrinho está vazio';
    const dataTestid = 'shopping-cart-empty-message';
    let showProductsInCartFunc = '';
    if (listCart.length === 0) {
      showProductsInCartFunc = (
        <span data-testid={ dataTestid }>
          <p>{ emptyMessage }</p>
        </span>
      );
    } else {
      showProductsInCartFunc = listCart
        .map((product) => (
          <li key={ product.id } className="conteiner-item">
            <button
              className="button-change-quantity"
              type="button"
              onClick={ this.deleteItem }
              value={ product.id }
            >
              X
            </button>
            <img src={ product.thumbnail } alt="" className="imgCart" />
            <span
              className="title-item"
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </span>
            <button
              className="button-change-quantity"
              type="button"
              name={ product.id }
              value="-"
              onClick={ this.changeQuantity }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <span
              data-testid="shopping-cart-product-quantity"
              className="quantity-item"
            >
              {product.productQuantity}
            </span>
            <button
              className="button-change-quantity"
              type="button"
              name={ product.id }
              value="+"
              onClick={ this.changeQuantity }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <span>
              R$
              <span>{ product.price * product.productQuantity }</span>
            </span>
          </li>));
    }
    return (
      <section className="productListContainer">
        {showProductsInCartFunc}
      </section>
    );
  }

  render() {
    return (
      <section>
        {this.showProductsInCart()}
        <Link to="/checkout" data-testid="checkout-products">
          Finalizar Comprar
        </Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  handle: PropTypes.func.isRequired,
  productsInCart: PropTypes.objectOf(PropTypes.shape({
    productQuantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default ShoppingCart;
