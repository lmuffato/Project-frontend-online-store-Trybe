import React, { Component } from 'react';
import Category from './category_list';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Category />
        <label htmlFor="catSearchID" data-testid="home-initial-message">
          <input
            type="text"
            id="catSearchID"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}
