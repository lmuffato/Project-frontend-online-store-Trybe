import React, { Component } from 'react';
import InitialMessage from '../components/InitialMessage';
import SearchBar from '../components/SearchBar';
import IconCart from '../components/IconCart';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <IconCart />
        <SearchBar />
        <InitialMessage />
      </div>
    );
  }
}
