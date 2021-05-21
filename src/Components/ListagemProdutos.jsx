import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';

import ProductCard from './ProductCard';
import Categories from './Categories';
import CartSize from './CartSize';

class ListagemProdutos extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productsOnCart: [],
      productsQuantity: {},
      isLoading: false,
      query: '',
      category: '',
      catSize: 0,
    };
  }

  componentDidMount() {
    this.handleSize();
  }

  handleSize() {
    const prevSize = parseFloat(sessionStorage.getItem('cartSize'));
    if (prevSize) {
      this.setState({ catSize: prevSize });
    }
  }

  fetchAPI = () => {
    const { query, category } = this.state;
    this.setState(
      { isLoading: true },
      async () => {
        const { results } = await api.getProductsFromCategoryAndQuery(category, query);
        this.setState({
          products: results,
          isLoading: false,
        });
      },
    );
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      query: target.value,
    });
  }

  handleChangeCategory = (category) => {
    this.setState(
      { category },
      () => this.fetchAPI(),
    );
  }

  handleAddToCart = ({ availableQuantity, title, id, price }) => {
    const { productsQuantity } = this.state;
    if (productsQuantity[title] === undefined) {
      this.setState((prevState) => ({
        productsOnCart: [...prevState.productsOnCart, {
          title,
          id,
          price,
          availableQuantity,
        }],
        productsQuantity: {
          ...prevState.productsQuantity,
          [title]: 1,
        },
        catSize: prevState.catSize + 1,
      }));
    } else {
      this.setState((prevState) => ({
        productsOnCart: [...prevState.productsOnCart, {
          title,
          id,
          price,
          availableQuantity,
        }],
        productsQuantity: { ...prevState.productsQuantity,
          [title]: prevState.productsQuantity[title] + 1 },
        catSize: prevState.catSize + 1,
      }));
    }
    const { catSize } = this.state;
    sessionStorage.setItem('cartSize', catSize + 1);
  }

  render() {
    const { products, productsOnCart, productsQuantity, isLoading, catSize } = this.state;

    if (isLoading) {
      return (
        <p>Carregando...</p>
      );
    }

    return (
      <div>
        <CartSize size={ catSize } />
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            type="text"
            onChange={ (e) => this.handleChangeInput(e) }
          />
        </label>
        <button data-testid="query-button" type="button" onClick={ this.fetchAPI }>
          Pesquisar
        </button>

        <Categories onClick={ this.handleChangeCategory } />
        <aside>
          <Link
            to={ {
              pathname: '/cart',
              search: '',
              hash: '',
              state: {
                products: productsOnCart,
                productsQuantity,
              },
            } }
          >
            <button type="button" data-testid="shopping-cart-button">Cart</button>
          </Link>
        </aside>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { products === []
          ? (<p>Nenhum produto foi encontrado</p>)
          : products.map((product) => (
            <ProductCard
              quantityOnCart={ catSize }
              product={ product }
              id={ product.id }
              key={ product.id }
              title={ product.title }
              availableQuantity={ product.available_quantity }
              price={ product.price }
              imagePath={ product.thumbnail }
              onClick={ this.handleAddToCart }
            />
          ))}

      </div>
    );
  }
}

export default ListagemProdutos;
