import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardProduct from './components/CardProduct';
import Category from './components/Category';
import ProductNumber from '../../components/ProductNumber';

class Home extends React.Component {
  render() {
    const {
      onSearch, onFilterByCategory, onFilterByQuery,
      products, addToCart, cart,
    } = this.props;

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
          <ProductNumber cart={ cart } />
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
