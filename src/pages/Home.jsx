import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CategoriesBar from '../components/CategoriesBar';
import SearchBar from '../components/SearchBar';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <main>
        <CategoriesBar categories={ categories } />
        <section>
          <SearchBar />
          <Button>
            <Link data-testid="shopping-cart-button" to="/Cart">Cart</Link>
          </Button>
        </section>

      </main>
    );
  }
}

export default Home;
