import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/Home/components/ProductDetails';
import { getProductsFromCategoryAndQuery } from './services/api';
import FinalizingPurchase from './pages/FinalizingPurchase';
import PurchaseSummary from './pages/Home/components/PurchaseSummary';

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
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  addToCart({ target }) {
    const { products, cart } = this.state;
    let addedProduct = {};
    let updatedCart = [];

    const productFound = products.find((product) => product.id === target.id);

    const foundInCart = cart.find((product) => product.data.id === target.id);

    if (foundInCart) {
      const increasedQuantity = foundInCart.quantity + 1;
      addedProduct = {
        ...foundInCart,
        quantity: increasedQuantity,
      };
      updatedCart = cart.map((product) => {
        if (product.data.id === target.id) {
          product = addedProduct;
        }
        return product;
      });
    } else {
      addedProduct = {
        quantity: 1,
        data: productFound,
      };
      updatedCart = [...cart, addedProduct];
    }

    this.setState({
      cart: updatedCart,
    });
  }

  removeFromCart(id) {
    const { cart } = this.state;
    const updatedCart = cart.filter((product) => product.data.id !== id);
    this.setState({
      cart: updatedCart,
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
              addToCart={ this.addToCart }
            />
          </Route>
          <Route path="/cart">
            <ShoppingCart
              cart={ cart }
              removeFromCart={ this.removeFromCart }
              setCart={ this.setCart }
            />
          </Route>
          <Route
            path="/product/:category/:id"
            component={
              (props) => (<ProductDetails
                addToCart={ this.addToCart }
                { ...props }
              />)
            }
            exact
          />
          <Route
            path="/finalizingpurchase"
            component={ FinalizingPurchase }
          >
            <PurchaseSummary cart={ cart } />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
