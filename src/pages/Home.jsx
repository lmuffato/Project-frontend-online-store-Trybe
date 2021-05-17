import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CategoriesBar from '../components/CategoriesBar';
import ListItems from '../components/ListItems';
import SearchBar from '../components/SearchBar';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

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
    return (
      <main>
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
            : <ListItems arrayOfItems={ arrayOfItems } />}
        </section>
      </main>
    );
  }
}

export default Home;
