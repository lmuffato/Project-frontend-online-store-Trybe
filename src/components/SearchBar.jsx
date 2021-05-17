import React from 'react';
import { Link } from 'react-router-dom';
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

  async handleFilter() {
    const { filter, status } = this.state;
    // console.log('Status', status, 'Filtro', filter);
    const { getProductsFromCategoryAndQuery } = apiUrl;
    if (status === true) {
      const result = await getProductsFromCategoryAndQuery('', filter);
      console.log(result);
      this.setState({
        products: result.results,
      }, () => {
        // console.log('State', this.state.products);
      });
    }
  }

  async handleFilterCategory(event) {
    const category = event.target.value;
    // console.log(category);
    const { getCategoryId } = apiUrl;
    const result = await getCategoryId(category);
    this.setState({ products: result.results });
  }

  products() {
    const { products } = this.state;
    console.log(products);
    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    console.log('Produts', products);
    return (
      products.map((product) => (
        <div data-testid="product" key={ product.id }>
          <img src={ product.thumbnail } alt={ product.id } />
          <h6>{product.title}</h6>
          <p>{` R$ ${product.price} `}</p>
        </div>
      ))
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
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="https://image.flaticon.com/icons/png/512/126/126083.png" alt="Icone Cart" id="cart-image" />
        </Link>
        { this.products()}
        <Categories func={ this.handleFilterCategory } />
      </div>
    );
  }
}

export default SearchBar;
