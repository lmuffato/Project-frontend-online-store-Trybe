import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCart from '../imagens/shoppingCart.svg';
import ProductCard from './ProductCard';
import Loading from '../pages/Loading';
import { checkStorage } from '../services/localStorage';

export default class FrontPage extends React.Component {
  render() {
    const { request, handleChangeInput, loading, items } = this.props;
    const storage = checkStorage();
    return (
      <section className="search-and-products">
        <div className="search-and-phrase">
          <div className="searchbar-container">
            <button
              type="submit"
              data-testid="query-button"
              id="search-button"
              className="search-button"
              onClick={ request }
            >
              Pesquisar
            </button>
            <input
              type="text"
              name="input"
              className="searchbar"
              onChange={ handleChangeInput }
              data-testid="query-input"
            />
            <Link
              to="/ShoppingCart"
              data-testid="shopping-cart-button"
              className="shopping-cart-button"
            >
              <img
                src={ shoppingCart }
                alt="Carrinho de compras"
                className="shopping-cart-image"
              />
              <p>
                {storage.length}
              </p>
            </Link>
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="products-list">
          {loading
            ? <Loading />
            : items.map((item) => <ProductCard item={ item } key={ item.id } />)}
        </div>
      </section>
    );
  }
}

FrontPage.propTypes = {
  request: PropTypes.func,
  handleChangeInput: PropTypes.func,
  loading: PropTypes.bool,
  item: PropTypes.array,
}.isRequired;
