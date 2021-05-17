import React, { Component } from 'react';
import InitialMessage from '../components/InitialMessage';
import SearchBar from '../components/SearchBar';
import IconCart from '../components/IconCart';
import Categories from '../components/Categories';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <IconCart />
        <SearchBar />
        <InitialMessage />
        <aside>
          <Categories />
        </aside>
      </div>
    );
  }
}
