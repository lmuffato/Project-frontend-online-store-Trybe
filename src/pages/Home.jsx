import React from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <Categories />
      </>
    );
  }
}

export default Home;
