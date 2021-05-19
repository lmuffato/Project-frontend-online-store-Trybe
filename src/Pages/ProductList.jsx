// implement AddMovie component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartIcon from './ShoppinCart/cartIcon.png';
import SearchProduct from '../components/SearchProducts';
import CategoriesBar from '../components/CategoriesBar';
import * as api from '../services/api';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      query: '',
      productsList: [],
    };
  }

  handle = (category) => {
    this.setState({ category }, () => this.search());
  };

  handleQuery = ({ target: { value } }) => {
    this.setState({ query: value });
  }

  search = async () => {
    const { query, category } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const request = await getProductsFromCategoryAndQuery(category, query);
    let productsList = [];
    if (request !== []) {
      const { results } = request;
      productsList = results;
    }
    this.setState({ productsList });
  };

  render() {
    const { handle, productsInCart, sumTotalItens } = this.props;
    const { query, productsList } = this.state;
    return (
      <main className="conteiner-main">
        <section className="conteiner-categories">
          <CategoriesBar handle={ this.handle } />
        </section>
        <section className="conteiner-search">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <section className="conteiner-controls">
            <input
              data-testid="query-input"
              value={ query }
              onChange={ this.handleQuery }
              type="text"
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.search }
            >
              xablau
            </button>
            <Link
              to="/ShoppingCart"
              data-testid="shopping-cart-button"
            >
              <img
                alt="shopping-cart"
                className="shopping-cart-img"
                src={ cartIcon }
              />
            </Link>
            <h2 data-testid="shopping-cart-size">{sumTotalItens}</h2>
          </section>
          <SearchProduct
            query={ query }
            handle={ handle }
            productsList={ productsList }
            productsInCart={ productsInCart }
          />
        </section>

      </main>
    );
  }
}

ProductList.propTypes = {
  handle: PropTypes.func.isRequired,
  productsInCart: PropTypes.objectOf(PropTypes.shape({
    productQuantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;
