import React from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import CartButton from '../components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <Categories />
        <CartButton data-testid="shopping-cart-button" />
      </>
    );
  }
}

export default Home;
