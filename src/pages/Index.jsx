import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

class Index extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <Categories />
      </main>
    );
  }
}

export default Index;
