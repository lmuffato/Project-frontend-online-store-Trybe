import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Index extends Component {
  constructor() {
    super();

    this.getData = this.getData.bind(this);

    this.state = {
      categories: undefined,
    };
  }

  async getData() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <main>
        <SearchBar />
        <Categories categories={ categories } getData={ this.getData } />
      </main>
    );
  }
}

export default Index;
