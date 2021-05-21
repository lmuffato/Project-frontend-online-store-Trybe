import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetails from './pages/ProductDetails/index';
import Cart from './pages/Cart/index';
import Home from './pages/Home/index';
import Checkout from './pages/Checkout';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProduct: [],
      totalPrice: 0,
    };
  }

  addToCart = (obj) => {
    const { cartProduct } = this.state;
    this.setState({
      cartProduct: [...cartProduct, obj],
    });
  }

  render() {
    const { cartProduct, totalPrice } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/Cart"
            render={ (props) => (
              <Cart { ...props } cartProduct={ cartProduct } />) }
          />
          <Route
            path="/checkout"
            render={ (props) => (
              <Checkout
                { ...props }
                cardProducts={ cartProduct }
                totalPrice={ totalPrice }
              />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } addToCart={ this.addToCart } /> }
          />
          <Route
            path="/itemDetails/:itemId"
            render={ (props) => (<ProductDetails
              { ...props }
              addToCart={ this.addToCart }
            />) }
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
