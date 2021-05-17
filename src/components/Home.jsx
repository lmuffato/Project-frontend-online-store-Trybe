import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      searchedProducts: '',
      filteredCategory: '',
      products: [],
    };
  }

  filterCategory = async (event) => {
    const { id } = event.target;
    const { searchedProducts } = this.state;
    const currCatergory = await api.getProductsFromCategoryAndQuery(id, searchedProducts);
    this.setState({
      products: currCatergory.results,
      filteredCategory: id,
    });
  }

  productName = (event) => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  }

  filterSearchedProducts = async () => {
    const { inputValue, filteredCategory } = this.state;
    const productsList = await
    api.getProductsFromCategoryAndQuery(filteredCategory, inputValue);
    this.setState({
      products: productsList.results,
      searchedProducts: inputValue,
    });
  }

  render() {
    const { inputValue, products } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ this.productName }
          value={ inputValue }
          type="text"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.filterSearchedProducts }
        >
          Consultar
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Cart</Link>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <CategoriesList filterCategory={ this.filterCategory } />
        { products.length < 1
          ? <h2>Nenhum Produto foi encontrado</h2>
          : products.map((item) => (
            <ProductCard
              key={ item.id }
              title={ item.title }
              img={ item.thumbnail }
              price={ item.price }
              id={ item.id }
              currItem={ item }
            />
          )) }
      </div>
    );
  }
}

export default Home;
