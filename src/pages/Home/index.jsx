import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '../../components/Button/index';
import CategoriesBar from '../../components/CategoriesBar/index';
import ListProducts from '../../components/ListProducts';
import SearchBar from '../../components/SearchBar';

import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';

import './styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCategories = this.fetchCategories.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);

    this.state = {
      categories: [],
      productsList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async getProductsFromCategory(categoryId) {
    const response = await getProductsFromCategoryAndQuery(categoryId);

    this.setState({ productsList: response.results });
  }

  generateArray = async (item) => {
    const array = await getProductsFromCategoryAndQuery(false, item);
    this.setState({
      productsList: array.results,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  render() {
    const { categories, productsList } = this.state;
    const { addToCart, cartSize } = this.props;

    return (
      <main id="home-page">
        <CategoriesBar
          categories={ categories }
          onClick={ this.getProductsFromCategory }
        />

        <section>
          <SearchBar func={ this.generateArray } />

          <Button>
            <Link data-testid="shopping-cart-button" to="/Cart">Cart</Link>
          </Button>

          <p data-testid="shopping-cart-size">
            { cartSize }
          </p>

          {productsList.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : (
              <ListProducts
                productsList={ productsList }
                addToCart={ addToCart }
              />)}
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default Home;
