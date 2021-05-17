import React from 'react';
import SearchBar from '../components/SearchBar';
import HomeCart from '../components/HomeCart';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <HomeCart />
      </div>
    );
  }
}

export default HomePage;
