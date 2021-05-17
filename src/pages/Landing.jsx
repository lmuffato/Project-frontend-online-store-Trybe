import React, { Component } from 'react';
import IconCart from '../components/IconCart';
import InitialMessage from '../components/InitialMessage';
import SearchBar from '../components/SearchBar';

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
