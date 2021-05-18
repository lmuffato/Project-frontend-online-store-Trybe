import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.createCartITems = this.createCartITems.bind(this);
    this.state = {
      cartItems: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    this.createCartITems();
  }

  createCartITems() {
    const itemsCart = this.props.location.state.productInfo;
    const { id, thumbnail, price, title } = itemsCart;
    const product = { id, thumbnail, price, title };
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <EmptyCart />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
