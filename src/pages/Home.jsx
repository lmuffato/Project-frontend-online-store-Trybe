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

    this.state = {
      categories: [],
      arrayOfItems: [],
      cardProps: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
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
      <main>
        <CategoriesBar categories={ categories } />
        <section>
          <SearchBar func={ this.generateArray } />
          <Button>
            <Link data-testid="shopping-cart-button" to={ location }>Cart</Link>
          </Button>
          {arrayOfItems.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : <ListItems arrayOfItems={ arrayOfItems } func={ this.getPropsOfItem } />}
        </section>
      </main>
    );
  }
}

export default Home;
