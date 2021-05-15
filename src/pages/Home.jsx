import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ListItems from '../components/ListItems';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayOfItems: [],
    };
  }

  generateArray = async (item) => {
    const array = await getProductsFromCategoryAndQuery(false, item);
    // console.log(array.results);
    this.setState({
      arrayOfItems: array.results,
    });
  }

  render() {
    const { arrayOfItems } = this.state;
    return (
      <>
        <SearchBar func={ this.generateArray } />
        <Button>
          <Link data-testid="shopping-cart-button" to="/Cart">Cart</Link>
        </Button>
        <ListItems arrayOfItems={ arrayOfItems } />
      </>
    );
  }
}

export default Home;
