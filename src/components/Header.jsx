import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  // contructor() {
  //   super();
  //   this.state = {
  //     totalQuantity: 0,
  //   };
  // }

  render() {
    const { totalQuantity } = this.props;
    return (
      <header>
        <Link to="/">Home</Link>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        <span data-testid="shopping-cart-size">{totalQuantity}</span>
      </header>
    );
  }
}

Header.defaultProps = {
  totalQuantity: 0,
};

Header.propTypes = {
  totalQuantity: PropTypes.number,
};
