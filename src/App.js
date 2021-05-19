import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedCategory: '',
      searchedQuery: '',
      cart: {
        quantity: 0,
        products: [],
      },
      allReviews: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.filterFromCategory = this.filterFromCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCart = this.setCart.bind(this);
    this.setReviews = this.setReviews.bind(this);
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

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  setReviews(productReviews, id) {
    const { allReviews } = this.state;

    let reviews = [];

    const foundReview = allReviews.find((review) => review.productId === id);

    if (foundReview) {
      reviews = allReviews.map((review) => {
        if (review.productId === id) {
          review.reviews = [...productReviews.reviews];
        }
        return review;
      });
    } else {
      reviews = [
        ...allReviews,
        { ...productReviews },
      ];
    }

    this.setState({
      allReviews: reviews,
    });
  }

  addToCart({ target }, product) {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    const { cart: cartInState, products } = this.state;
    if (!cart) cart = cartInState;
    let addedProduct = {};
    let updatedCart = [];

    if (!product) {
      product = products.find((productState) => productState.id === target.id);
    }

    const foundInCart = cart.products.find(
      (productInCart) => productInCart.data.id === product.id,
    );

    if (foundInCart) {
      const increasedQuantity = foundInCart.quantity + 1;
      addedProduct = {
        ...foundInCart,
        quantity: increasedQuantity,
      };
      updatedCart = cart.products.map((productInCart) => {
        if (productInCart.data.id === product.id) {
          productInCart = addedProduct;
        }
        return productInCart;
      });
    } else {
      addedProduct = {
        quantity: 1,
        data: product,
      };
      updatedCart = [...cart.products, addedProduct];
    }

    let quantity = 0;
    updatedCart.forEach((productInCart) => {
      quantity += productInCart.quantity;
    });

    localStorage.setItem('cart', JSON.stringify({ quantity, products: updatedCart }));

    this.setState({
      cart: {
        quantity,
        products: updatedCart,
      },
    });
  }

  removeFromCart(id) {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    const { cart: cartInState } = this.state;
    if (!cart) cart = cartInState;
    const productToRemove = cart.products.find((product) => product.data.id === id);
    const updatedCart = cart.products.filter((product) => product.data.id !== id);
    const quantity = cart.quantity - productToRemove.quantity;

    localStorage.setItem('cart', JSON.stringify({ quantity, products: updatedCart }));

    this.setState({
      cart: {
        quantity,
        products: updatedCart,
      },
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
    const { products, cart, allReviews } = this.state;
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
              cart={ cart }
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
                allReviews={ allReviews }
                setReviews={ this.setReviews }
                { ...props }
                cart={ cart }
              />)
            }
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
