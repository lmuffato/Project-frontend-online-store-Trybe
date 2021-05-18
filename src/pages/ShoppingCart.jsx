import React from 'react';
import { Link as Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemOfCart from '../components/ItemOfCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalPayment: 0,
    };

    this.addProductToCart = this.addProductToCart.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.setProducts = this.setProducts.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    this.getProducts();
    if (!location.state) return; // tratando problema qnd clica no carrinho vazio
    const { product } = location.state;
    this.addProductToCart(product);
  }

  setProducts() {
    const { cart } = this.state;
    const storageItems = localStorage.getItem('products');
    let productsFromLS = [];
    if (storageItems) {
      productsFromLS = JSON.parse(localStorage.getItem('products'));
    }
    productsFromLS.push(cart[0]);
    localStorage.setItem('products', JSON.stringify(productsFromLS));
  }

  getProducts() {
    const get = localStorage.getItem('products');
    if (get) {
      this.setState({ cart: JSON.parse(get) });
    }
  }

  addProductToCart(product) {
    const { cart, totalPayment } = this.state;
    const { price } = product;
    this.setState({
      cart: [...cart, product],
      totalPayment: totalPayment + price,
    }, () => this.setProducts());
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <>
        <ol>
          {cart.map((item) => (
            <ItemOfCart key={ item.id } product={ item } />))}
        </ol>
        <Redirect to="/">Home</Redirect>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ShoppingCart;
