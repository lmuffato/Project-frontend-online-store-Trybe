import React, { Component } from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';

export default class Home extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Categories />
      </>
    );
  }
}
