import React, { Component } from 'react';
import InitialMessage from '../components/InitialMessage';
import SearchBar from '../components/SearchBar';
import IconCart from '../components/IconCart';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import * as API from '../services/api';

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      // categories: '',
      searchInput: '',
    };
    // this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    // this.handleCategories = this.handleCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidUpdate() {
    this.fetchProducts();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  // handleCategories(event) {
  //   const { value } = event.target;
  //   this.setState({ categories: value });
  // }
  // handleSearchBarChange(event) {
  //   const { value } = event.target;
  //   this.setState({ searchInput: value });
  // }

  async fetchProducts() {
    const { searchInput, selectedCategory } = this.state;
    const response = await API
      .getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    console.log(response.results);
    this.setState({ products: response.results });
    return response.results;
  }

  // async renderProducts() {
  //   const arrayResultsProducts = this.fetchProducts();
  //   const product = await arrayResultsProducts
  //     .length > 0 ? arrayResultsProducts.map((products) => (
  //       <ProductCard
  //         key={ products.id }
  //         title={ products.title }
  //         img={ products.thumbnail }
  //         price={ products.price }
  //       />
  //     )) : <p>Nenhum objeto encontrado</p>;
  //   return product;
  // }

  render() {
    const { products } = this.state;
    console.log('render');
    // const arrayResultsProducts = this.fetchProducts();
    return (
      <div>
        <IconCart />
        <SearchBar />
        <InitialMessage />
        <aside>
          <Categories onChange={ this.handleChange } />
        </aside>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
            />
          ))
        ) : (
          <p>Nenhum objeto encontrado</p>
        )}
      </div>
    );
  }
}
