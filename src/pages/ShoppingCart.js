import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const {
      location: { cartItems = {} },
    } = this.props;

    this.state = {
      cartItems,
      totalPrice: 0,
      totalQuantity: 0,
      total: 0,
    };
  }

  // updateTotal = (value) => {
  //   this.setState(({ total }) => ({
  //     total: total + value,
  //   }));
  // }

  deleteItem = (event /* , value */) => {
    const { name } = event.target;
    const { cartItems } = this.state;
    // this.setState(({ total }) => ({ total: total - value }), () => {
    //   delete cartItems[name];
    //   this.setState({ cartItems });
    //   this.totalValuesProducts();
    // });
    delete cartItems[name];
    this.setState({ cartItems });
    this.totalValuesProducts();
  }

  getItems = (event) => {
    const { name, value } = event;
    const { cartItems } = this.state;
    // if (cartItems[name].amount === 0) cartItems[name].amount = parseInt(value, 10) + 1;
    this.setState((prev) => ({ cartItems: { ...prev.cartItems, cartItems[name].amount: value } }));
    // cartItems[name].amount = parseInt(value, 10);
    // const { amount } = cartItems[name];

    console.log('Estado Cart');
    this.totalValuesProducts();
  }

  /* Tentar receber o amount do produto e atualizar ele de acordo com o botão clicado */

  totalValuesProducts = () => {
    const { cartItems, /* total, */ totalQuantity, totalPrice } = this.state;

    const summTotal = Object.entries(cartItems)
      .map((product) => product[1].amount * product[1].price)
      .reduce((acc, curr) => (acc + curr), 0);

    const summQuantity = Object.entries(cartItems)
      .map((product) => product[1].amount)
      .reduce((acc, curr) => (acc + curr), 0);

    this.setState(() => ({ totalPrice: summTotal, totalQuantity: summQuantity }));
    console.log('Soma total', summTotal, totalPrice, totalQuantity);
  }

  validateCart = () => {
    const { cartItems } = this.state;

    if (Object.keys(cartItems).length) {
      return Object.entries(cartItems)
        .map((product, i) => (<CartProduct
          key={ i }
          product={ product[1] }
          deleteItem={ this.deleteItem }
          getItems={ this.getItems }
          updateTotal={ this.updateTotal }
        />));
    }
    return (
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    );
  };

  render() {
    const { totalPrice, totalQuantity, total } = this.state;
    return (
      <section>
        {this.validateCart()}
        <p>
          { `Quantidade total de produtos: ${totalQuantity}` }
        </p>
        <p>
          { `Valor total: ${totalPrice}` }
        </p>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    cartItems: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number,
    }),
  }).isRequired,
};
