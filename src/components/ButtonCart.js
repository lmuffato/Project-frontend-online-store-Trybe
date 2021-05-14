import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ButtonCart extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Cart
        </Link>
      </div>
    );
  }
}
