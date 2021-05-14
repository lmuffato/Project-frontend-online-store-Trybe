import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <Button>
          <Link data-testid="shopping-cart-button" to="/Cart">Cart</Link>
        </Button>
      </>
    );
  }
}

export default Home;
