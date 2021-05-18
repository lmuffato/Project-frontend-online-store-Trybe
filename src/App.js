import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/Home/components/ProductDetails';
import { getProductsFromCategoryAndQuery } from './services/api';
import FinalizingPurchase from './pages/FinalizingPurchase'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedCategory: '',
      searchedQuery: '',
      cart: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.filterFromCategory = this.filterFromCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCart = this.setCart.bind(this);
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

  setCart(cart) {
    this.setState({
      cart,
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
    const { products, cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home
              onSearch={ this.handleClick }
              onFilterByCategory={ this.filterFromCategory }
              onFilterByQuery={ this.handleChange }
              products={ products }
              setCart={ this.setCart }
            />
          </Route>
          <Route path="/cart">
            <ShoppingCart cart={ cart } />
          </Route>
          <Route
            path="/product/:category/:id"
            component={ ProductDetails }
            exact
          />
          <Route path="/finalizingpurchase" component={ FinalizingPurchase } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
