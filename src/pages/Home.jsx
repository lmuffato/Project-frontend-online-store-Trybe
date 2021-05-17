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
    this.selectCategory = this.selectCategory.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
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
    this.searchFunction('', inputSearch);
  }

  searchFunction(id = '', text = '') {
    getProductsFromCategoryAndQuery(id, text).then(({ results: products }) => {
      this.setState({
        products,
      });
    });
  }

  selectCategory({ target }) {
    const dataCategoryId = target.getAttribute('data-category-id');
    this.searchFunction(dataCategoryId, '');
  }

  render() {
    const { inputSearch, products } = this.state;
    return (
      <section className="container-home">
        <CategoriesList onClick={ this.selectCategory } />
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
