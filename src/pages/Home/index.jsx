import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      arrayOfItems: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async getProductsFromCategory(categoryId) {
    const response = await getProductsFromCategoryAndQuery(categoryId);

    this.setState({ arrayOfItems: response.results });
  }

  generateArray = async (item) => {
    const array = await getProductsFromCategoryAndQuery(false, item);
    this.setState({
      arrayOfItems: array.results,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  render() {
    const { categories, arrayOfItems } = this.state;
    const { func } = this.props;
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
          {arrayOfItems.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : <ListProducts arrayOfItems={ arrayOfItems } func={ func } />}
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Home;
