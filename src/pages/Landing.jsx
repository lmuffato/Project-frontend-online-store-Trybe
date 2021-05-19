import React, { Component } from 'react';
import InitialMessage from '../components/InitialMessage';
import SearchBar from '../components/SearchBar';
import IconCart from '../components/IconCart';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import * as API from '../services/api';
import Button from '../components/Button';

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      selectedCategory: '',
      searchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProductsOnClick = this.fetchProductsOnClick.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { selectedCategory } = this.state;
    if (prevState.selectedCategory !== selectedCategory) {
      return this.fetchProductsByCategory();
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async fetchProductsByCategory() {
    const { selectedCategory } = this.state;
    const response = await API
      .getProductsFromCategoryAndQuery(selectedCategory);
    console.log(response.results);
    this.setState({ products: response.results });
  }

  async fetchProductsOnClick(category, query) {
    const response = await API
      .getProductsFromCategoryAndQuery(category, query);
    console.log(response.results);
    this.setState({ products: response.results });
  }

  render() {
    const { products, selectedCategory, searchInput } = this.state;
    console.log('render');
    return (
      <div>
        <IconCart />
        <SearchBar onChange={ this.handleChange } />
        <Button
          onClick={ this.fetchProductsOnClick }
          searchInput={ searchInput }
          selectedCategory={ selectedCategory }
        />
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
