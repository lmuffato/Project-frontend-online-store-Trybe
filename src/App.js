import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      thumbnailId: '',
      price: 0,
      storageArray: [],
    };
  }

  addToLocalStorage = (storageArray) => {
    const myArrayStringfied = JSON.stringify(storageArray);
    localStorage.setItem('itens', myArrayStringfied);
  }

  refreshLocalStorage = (element) => {
    localStorage.removeItem(localStorage.key('itens'));
    this.addToLocalStorage(element);
  }

  addToCart = async (item) => {
    await this.setState({
      title: item.title,
      thumbnail: item.thumbnail,
      thumbnailId: item.thumbnail_id,
      price: item.price,
    });
    const { title, thumbnail, thumbnailId, price, storageArray } = this.state;
    const cartObj = { title, thumbnail, thumbnailId, price };
    storageArray.push(cartObj);
    this.addToLocalStorage(storageArray);
  }

  render() {
    const { title, thumbnail, thumbnailId, price } = this.state;
    const cartInfo = { title, thumbnail, thumbnailId, price };
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            {/* Adição do componente nas routes */}
            <Route
              path="/ShoppingCart"
              render={
                (props) => <ShoppingCart { ...props } cartInfo={ cartInfo } />
              }
            />
            <Route
              path="/:id"
              render={
                (props) => <ProductDetail { ...props } addToCart={ this.addToCart } />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
