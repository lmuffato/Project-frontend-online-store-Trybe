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

  productExists(title) {
    const { cartProducts } = this.state;

    const product = cartProducts.find((item) => item.title === title);

    return product;
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

  updateLocalStorage() {
    const { cartProducts, cartSize } = this.state;

    if (cartProducts && cartSize) {
      localStorage.setItem('cart-products', JSON.stringify(cartProducts));
      localStorage.setItem('cart-size', JSON.stringify(cartSize));
    }
  }

  render() {
    const { cartProducts, cartSize } = this.state;

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
            path="/Cart"
            render={ (props) => <Cart { ...props } cartProduct={ cartProducts } /> }
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
