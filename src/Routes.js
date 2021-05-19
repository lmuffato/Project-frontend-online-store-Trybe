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
          <Route path="/" component={ Home } exact />
          <Route
            path="/itemDetails/:itemId"
            render={ (props) => <ProductDetails { ...props } func={ this.addToCart } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Routes;
