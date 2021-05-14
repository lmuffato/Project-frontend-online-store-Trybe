import React, { Component } from 'react';
import InitialMessage from '../components/InitialMessage';
import SearchBar from '../components/SearchBar';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <InitialMessage />
      </div>
    );
  }
}
