import React, { Component } from 'react';
import ButtonCart from '../components/ButtonCart';

export default class Home extends Component {
  render() {
    return (
      <main>
        <label data-testid="home-initial-message" htmlFor="search">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="search" />
        </label>

        <ButtonCart />
      </main>
    );
  }
}
