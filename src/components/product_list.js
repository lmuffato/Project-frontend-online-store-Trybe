import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductList extends Component {
  constructor() {
    super();

    this.loadProductsByText = this.loadProductsByText.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.submitSearch = this.submitSearch.bind(this);

    this.state = {
      searchText: '',
      obj: [],
    };
  }

  async loadProductsByText({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async submitSearch() {
    const { searchText } = this.state;
    let result = '';
    if (searchText !== '') {
      result = await getProductsFromCategoryAndQuery('a', searchText);
    }
    if (result && result.results.length > 0) {
      const Array = [];
      result.results.map((item) => {
        const newObj = {
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
        };
        return (Array.push(newObj));
      });
      this.setState({ obj: Array });
    } else {
      this.setState({ obj: 'nenhum' });
    }
  }

  loadProducts(obj) {
    if (obj === 'nenhum' || obj === '') {
      return 'Nenhum produto foi encontrado.';
    }
    return obj.map((item) => (
      <section data-testid="product" key={ item.id }>
        <img src={ item.thumbnail } width="100px" alt="item.title" />
        {item.title}
        | PRICE:
        {item.price}
      </section>
    ));
  }

  render() {
    const { obj, searchText } = this.state;
    return (
      <div>
        <label htmlFor="catSearchID" data-testid="home-initial-message">
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            value={ searchText }
            id="catSearchID"
            onChange={ this.loadProductsByText }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.submitSearch }
          >
            Pesquisar
          </button>
          <div>
            <section>
              { obj.length > 0 ? this.loadProducts(obj) : ''}
            </section>
          </div>
        </label>
      </div>
    );
  }
}
