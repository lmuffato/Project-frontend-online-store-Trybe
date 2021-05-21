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
      totalPrice: 0,
      stillShopping: true,
      cartProducts: [],
      cartSize: 0,
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  getStorage() {
    const storageCartProducts = localStorage.getItem('cart-products');
    const storageCartSize = localStorage.getItem('cart-size');

    const storagedCartProducts = JSON.parse(storageCartProducts);
    const storagedCartSize = JSON.parse(storageCartSize);

    if (storageCartProducts && storageCartSize) {
      this.setState({ cartProducts: storagedCartProducts, cartSize: storagedCartSize });
    }
  }

  getCurrentSize(cartProducts) {
    return cartProducts.reduce((acc, current) => {
      acc += current.size;

      return acc;
    }, 0);
  }

  addToCart = (product) => {
    const { cartProducts } = this.state;

    const verifiedProduct = this.productExists(product.title);

    if (verifiedProduct) {
      let { size } = verifiedProduct;
      size += 1;
      verifiedProduct.size = size;

      const index = cartProducts.indexOf(verifiedProduct);

      this.setState((state) => {
        state.cartProducts[index] = verifiedProduct;

        return state;
      });

      this.updateSize(false);
    } else {
      product.size = 1;

      this.setState({
        cartProducts: [...cartProducts, product],
      });

      this.updateSize(true);
    }
  };

  resetState = () => {
    const { stillShopping } = this.state;
    if (!stillShopping) {
      this.setState({
        cartProducts: [],
        totalPrice: 0,
        stillShopping: true,
      });
    }
  }

  endShopping = () => {
    this.setState({
      stillShopping: false,
    });
  }

  updateLocalStorage() {
    const { cartProducts, cartSize } = this.state;

    if (cartProducts && cartSize) {
      localStorage.setItem('cart-products', JSON.stringify(cartProducts));
      localStorage.setItem('cart-size', JSON.stringify(cartSize));
    }
  }

  updateSize(first) {
    const { cartProducts } = this.state;
    let { cartSize } = this.state;

    if (first) {
      this.setState({ cartSize: cartSize += 1 });
    } else {
      const size = this.getCurrentSize(cartProducts);
      this.setState({ cartSize: size });
    }
  }

  productExists(title) {
    const { cartProducts } = this.state;

    const product = cartProducts.find((item) => item.title === title);

    return product;
  }

  render() {
    const { cartProducts, cartSize, totalPrice } = this.state;

    this.updateLocalStorage();

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home { ...props } addToCart={ this.addToCart } cartSize={ cartSize } />
            ) }
          />
          <Route
            path="/checkout"
            render={ (props) => (
              <Checkout
                { ...props }
                cardProducts={ cartProducts }
                totalPrice={ totalPrice }
                cleanCart={ this.resetState }
                endShopping={ this.endShopping }
              />) }
          />
          <Route
            path="/itemDetails/:itemId"
            render={ (props) => (
              <ProductDetails
                { ...props }
                addToCart={ this.addToCart }
                cartSize={ cartSize }
              />
            ) }
          />
          <Route
            path="/Cart"
            render={ (props) => <Cart { ...props } cartProduct={ cartProducts } /> }
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
