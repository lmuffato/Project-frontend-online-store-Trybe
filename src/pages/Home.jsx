import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import Products from '../components/Products';
import SearchBar from '../components/SearchBar';
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
        loading: false,
      });
    });
  }

  render() {
    const { inputSearch, products } = this.state;
    return (
      <section className="container-home">
        <CategoriesList />
        <section className="container-search-products">
          <section>
            <SearchBar onChange={ this.handleInput } onSubmit={ this.handleProductsByQuery } value={ inputSearch } />
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
                className="shopping-cart-img"
                src="../images/shopping-basket.jpg"
                alt="Ícone de carrinho de compras"
              />
            </Link>
          </section>
          <main>
            <Products products={ products } />
          </main>
        </section>
      </section>
    );
  }
}

export default Home;
