import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import CartShopPage from './Components/CartShopPage';
import * as api from './services/api';
import Search from './Components/Search';
import CategorieList from './Components/CategorieList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  render() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });

    const { categories } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Search />
          <Route path="/CartShopPage" component={ CartShopPage } />
          <CartButton />
          <CategorieList categories={ categories } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
