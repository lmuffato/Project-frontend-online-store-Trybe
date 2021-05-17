import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedCategory: '',
      searchedQuery: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.filterFromCategory = this.filterFromCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleClick() {
    const { searchedQuery, selectedCategory } = this.state;

    const request = await getProductsFromCategoryAndQuery(
      selectedCategory, searchedQuery,
    );

    this.setState({
      products: request.results,
    });
  }

  handleChange({ target }) {
    this.setState({
      searchedQuery: target.value,
    });
  }

  async filterFromCategory(categoryId) {
    const { searchedQuery } = this.state;
    let products = await getProductsFromCategoryAndQuery(categoryId, searchedQuery);
    products = products.results;
    this.setState({
      products,
      selectedCategory: categoryId,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home
              onSearch={ this.handleClick }
              onFilterByCategory={ this.filterFromCategory }
              onFilterByQuery={ this.handleChange }
              products={ products }
            />
          </Route>
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
