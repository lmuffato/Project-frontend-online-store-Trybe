import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardProduct from './components/CardProduct';
import Category from './components/Category';

class Home extends React.Component {
  render() {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    const {
      onSearch, onFilterByCategory, onFilterByQuery,
      products, addToCart, cart: cartInProps,
    } = this.props;

    if (!cart) cart = cartInProps;

    return (
      <>
        <input type="text" data-testid="query-input" onChange={ onFilterByQuery } />

        <button
          data-testid="query-button"
          onClick={ onSearch }
          type="button"
        >
          Pesquisa
        </button>

        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
          <span data-testid="shopping-cart-size">
            { cart.quantity }
          </span>
        </Link>
        <Category onCategorySelection={ onFilterByCategory } />
        <CardProduct products={ products } addToCart={ addToCart } />
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  onSearch: PropTypes.func,
}.isRequired;
