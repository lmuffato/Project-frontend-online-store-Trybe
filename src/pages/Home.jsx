import React, { Component } from 'react';
import '../components/Categories/Categories.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Categories from '../components/Categories/Categories';

class Home extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Categories />
      </>
    );
  }
}

export default Home;
