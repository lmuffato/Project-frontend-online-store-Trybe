import React from 'react';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <CartButton data-testid="shopping-cart-button" />
      </>
    );
  }
}

export default Home;
