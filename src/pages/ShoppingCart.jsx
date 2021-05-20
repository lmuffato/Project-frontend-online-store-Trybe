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
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

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
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalPayment)}
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
