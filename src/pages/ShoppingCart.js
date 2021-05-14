import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <EmptyCart />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
