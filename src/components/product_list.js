import React, { Component } from 'react';
import ShopCartButton from './ShopCartButton';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <label htmlFor="catSearchID" data-testid="home-initial-message">
          <input
            type="text"
            id="catSearchID"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <ShopCartButton />
      </div>
    );
  }
}
