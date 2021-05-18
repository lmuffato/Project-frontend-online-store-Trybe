import React, { Component } from 'react';
import '../components/Categories/Categories.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputTextBox: '',
      requestedProducts: [],
      selectedCategory: '',
    };
    this.updateTextBoxValue = this.updateTextBoxValue.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  chooseCategory(category) {
    this.setState(
      { selectedCategory: category },
      () => this.fetchProducts(),
    );
  }

  updateTextBoxValue(value) {
    this.setState(
      { inputTextBox: value },
      () => this.fetchProducts(),
    );
  }
  // TODO: fetchProducts not working correct

  async fetchProducts() {
    const { selectedCategory, inputTextBox } = this.state;
    console.warn(`Fetch chamado com parametros ${selectedCategory} e ${inputTextBox}`);
    const response = await getProductsFromCategoryAndQuery(
      selectedCategory, inputTextBox,
    );
    const { results } = response;
    this.setState({ requestedProducts: results });
  }

  render() {
    const { requestedProducts } = this.state;
    return (
      <>
        <SearchBar onClick={ this.updateTextBoxValue } />
        <Categories onClick={ this.chooseCategory } />
        <Products mlItems={ requestedProducts } selected />
      </>
    );
  }
}

export default Home;
