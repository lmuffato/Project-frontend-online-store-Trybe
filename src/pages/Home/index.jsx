import React from 'react';
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
      cardProps: [],
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

  getPropsOfItem = (obj) => {
    const { cardProps } = this.state;
    this.setState({
      cardProps: [...cardProps, obj],
    });
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  render() {
    const { categories, arrayOfItems, cardProps } = this.state;
    const location = {
      pathname: '/Cart',
      state: {
        item: cardProps,
      },
    };
    return (
      <main id="home-page">
        <CategoriesBar
          categories={ categories }
          onClick={ this.getProductsFromCategory }
        />
        <section>
          <SearchBar func={ this.generateArray } />
          <Button>
            <Link data-testid="shopping-cart-button" to={ location }>Cart</Link>
          </Button>
          {arrayOfItems.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : <ListProducts arrayOfItems={ arrayOfItems } func={ this.getPropsOfItem } />}
        </section>
      </main>
    );
  }
}

export default Home;
