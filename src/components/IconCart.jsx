import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IconCart extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        <img src="https://i.pinimg.com/originals/ef/33/73/ef3373c96bd71626398cea1a3429ba95.png" alt="cart" width="35px" />
      </Link>
    );
  }
}

export default IconCart;
