import React, { Component } from 'react';
import CategoriesList from '../components/CategoriesList';
import Products from '../components/Products';
import Header from '../components/Header';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
      products: [],
    };
  }

  componentDidMount() {

  }

  handleInput = ({ target: { value } }) => {
    this.setState({
      inputSearch: value,
    });
  }

  handleProductsByQuery = (event) => {
    event.preventDefault();
    const { inputSearch } = this.state;
    getProductsFromCategoryAndQuery('', inputSearch).then(({ results: products }) => {
      this.setState({
        products,
      });
    });
  }

  render() {
    const { inputSearch, products } = this.state;
    return (
      <section className="container-home">
        <CategoriesList />
        <section className="container-search-products">
          <Header
            handleInput={ this.handleInput }
            handleProductsByQuery={ this.handleProductsByQuery }
            inputSearch={ inputSearch }
          />
          <main>
            <Products products={ products } />
          </main>
        </section>
      </section>
    );
  }
}

export default Home;
