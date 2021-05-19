import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetails from './pages/ProductDetails/index';
import Cart from './pages/Cart/index';
import Home from './pages/Home/index';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProduct: [],
    };
  }

  addToCart = (obj) => {
    const { cartProduct } = this.state;
    this.setState({
      cartProduct: [...cartProduct, obj],
    });
  }

  render() {
    const { cartProduct } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/Cart"
            render={ (props) => (
              <Cart { ...props } cartProduct={ cartProduct } />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } func={ this.addToCart } /> }
          />
          <Route
            path="/itemDetails/:itemId"
            render={ (props) => <ProductDetails { ...props } func={ this.addToCart } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.defaultProps = {
  cartProducts: [],
};

Routes.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.array),
};

export default Routes;
