import React from 'react';
import { Link as Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ItemOfCart from '../components/ItemOfCart';
// import * as shoppingCartService from '../services/shoppingCartService';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalPayment: 0,
    };

    // this.addProductToCart = this.addProductToCart.bind(this);
    this.getProducts = this.getProducts.bind(this);
    // this.setProducts = this.setProducts.bind(this);
  }

  componentDidMount() {
  //   const { location } = this.props;
    this.getProducts();
  //   if (!location.state) return; // tratando problema qnd clica no carrinho vazio
  //   const { product } = location.state;
  //   this.addProductToCart(product);
  }

  // setProducts() {
  //   const { cart, totalPayment } = this.state; // vai virar parâmetro da função // cart = product
  //   const storageItems = localStorage.getItem('products');
  //   const storagePrice = localStorage.getItem('total');
  //   let productsFromLS = [];
  //   let amount = 0;
  //   if (storageItems) {
  //     productsFromLS = JSON.parse(localStorage.getItem('products'));
  //   }
  //   if (storagePrice) {
  //     amount = JSON.parse(localStorage.getItem('total'));
  //   }
  //   productsFromLS.push(cart[0]);
  //   amount += totalPayment; // price, de product
  //   localStorage.setItem('products', JSON.stringify(productsFromLS));
  //   localStorage.setItem('total', JSON.stringify(amount));
  // }

  getProducts() {
    const get = localStorage.getItem('products');
    const getPrice = localStorage.getItem('total');
    if (get) {
      this.setState({ cart: JSON.parse(get) });
    }
    if (getPrice) {
      this.setState({ totalPayment: JSON.parse(getPrice) });
    }
  }

  // addProductToCart(product) {
  //   const { cart, totalPayment } = this.state;
  //   const { price } = product;
  //   this.setState({
  //     cart: [...cart, product],
  //     totalPayment: totalPayment + price,
  //   }, () => this.setProducts());
  // }

  render() {
    const { cart, totalPayment } = this.state;
    if (cart.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <>
        <Header />
        <section>
          {cart.map((item) => (
            <ItemOfCart key={ item.id } product={ item } />))}
        </section>
        <p>
          { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalPayment) }
        </p>
        <Redirect to="/">Home</Redirect>
        <Link to="/checkout" data-testid="checkout-products">Comprar</Link>
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

// Referências:
// Formatação de números:
// --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// Correção do erro nas proptypes/checker:
// --> https://stackoverflow.com/questions/29995444/react-checker-is-not-a-function
