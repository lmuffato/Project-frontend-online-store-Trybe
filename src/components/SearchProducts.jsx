import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './SearchProducts.css';

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      productsList: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { category: categoryPrevious } = prevProps;
    const { category } = this.props;
    if (category !== categoryPrevious) this.search();
  }

  handle = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  addProductInCart = ({ target }) => {
    const { handle } = this.props;
    const { productsList } = this.state;
    const id = target.value;
    const product = productsList.find((item) => item.id === id);
    const quantityElment = target.parentElement.querySelector('.quantity');
    const productQuantity = parseInt(quantityElment.value, 10);
    handle(product, productQuantity);
  }

  search = async () => {
    const { query } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const { category } = this.props;
    const request = await getProductsFromCategoryAndQuery(category, query);
    let productsList = [];
    if (request !== []) {
      const { results } = request;
      productsList = results;
    }
    this.setState({ productsList });
  };

  productsCards = (list) => {
    const { query } = this.state;
    const message = query === '' ? '' : 'Nenhum produto foi encontrado';
    return (
      <section className="search-conteiner">
        {
          list.length === 0
            ? <h1 data-testid="product">{ message }</h1>
            : list.map((product) => {
              const { price, thumbnail, title, id } = product;
              return (
                <section className="product-conteiner" data-testid="product" key={ id }>
                  <h3 className="title-product" value={ title }>{ title }</h3>
                  <img
                    className="image-product"
                    src={ thumbnail }
                    alt={ `Imagem-${title}` }
                  />
                  <p className="price-product">{ `R$ ${price.toFixed(2)}` }</p>
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                    onClick={ this.addProductInCart }
                    value={ id }
                  >
                    Adicionar ao Carrinho
                  </button>
                  <label htmlFor="quantity">
                    Quantidade:
                    <input
                      className="quantity"
                      name="quantity"
                      type="number"
                      defaultValue={ 1 }
                    />
                  </label>
                  <Link
                    data-testid="product-detail-link"
                    to={ { pathname: '/item-details', state: { product } } }
                  >
                    Detalhes
                  </Link>
                </section>
              );
            })
        }
      </section>
    );
  };

  render() {
    const { query, productsList } = this.state;
    return (
      <section>
        <input
          data-testid="query-input"
          value={ query }
          onChange={ this.handle }
          type="text"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.search }
        >
          xablau
        </button>
        {this.productsCards(productsList)}
      </section>
    );
  }
}

SearchProducts.propTypes = {
  category: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default SearchProducts;
