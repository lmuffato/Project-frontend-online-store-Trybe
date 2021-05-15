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
      products: [],
    };
  }

  // componentDidMount() {
  //   this.getProducts();
  // }

  productName = (event) => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  }

  getProducts = async () => {
    const { inputValue } = this.state;
    const productsList = await api.getProductsFromCategoryAndQuery(undefined, inputValue);
    this.setState({
      products: productsList.results,
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
          onClick={ this.getProducts }
        >
          Consultar
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Cart</Link>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <CategoriesList />
        { products.length < 1
          ? <h2>Nenhum Produto foi encontrado</h2>
          : products.map((item) => (
            <ProductCard
              key={ item.id }
              title={ item.title }
              img={ item.thumbnail }
              price={ item.price }
            />
          )) }
      </div>
    );
  }
}

export default Home;
