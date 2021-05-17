import React from 'react';
import * as apiUrl from '../services/api';
import Categories from './Categories';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      status: false,
      products: [],
    };
    this.eventFilter = this.eventFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.products = this.products.bind(this);
    this.handleFilterCategory = this.handleFilterCategory.bind(this);
  }

  componentDidMount() {
    this.handleFilter();
  }

  async handleFilter() {
    const { filter, status } = this.state;
    const { getQuery } = apiUrl;
    if (status === true) {
      const result = await getQuery(filter);
      this.setState({
        products: result.results,
      });
    }
  }

  async handleFilterCategory(event) {
    const category = event.target.innerText;
    console.log(category);
    const { getCategoryId } = apiUrl;
    const result = await getCategoryId(category);
    console.log(result.results);
  }

  products() {
    const { products } = this.state;
    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      products.map((product) => {
        return (
          <div data-testid="product" key={ product.id }>
            <img src={ product.thumbnail } alt={ product.id } />
            <h6>{ product.title }</h6>
            <p>{` R$ ${ product.price } `}</p>
          </div>
        );
      })
    );
  }

  eventFilter(event) {
    const seach = event.target.value;
    if (seach.length !== 0) {
      this.setState({
        filter: seach,
        status: true,
      });
    } else {
      this.setState({
        status: false,
      });
    }
  }

  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input type="search" data-testid="query-input" onChange={ this.eventFilter } />
        <button type="button" data-testid="query-button" onClick={ this.handleFilter }>
          Search
        </button>
        { this.products() }
        <Categories func={ this.handleFilterCategory } />
      </div>
    );
  }
}

export default SearchBar;
