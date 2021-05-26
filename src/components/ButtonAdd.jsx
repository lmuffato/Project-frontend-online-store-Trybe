import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ButtonAdd extends Component {
  constructor() {
    super();
    this.addProductToStorage = this.addProductToStorage.bind(this);
  }

  addProductToStorage = () => {
    // Para essa função contei com o auxílio do repositório do grupo 26
    let products = [];
    const { newCartItem } = this.props;
    console.log(newCartItem);
    if (localStorage.getItem('cartItems') !== null) {
      products = JSON.parse(localStorage.getItem('cartItems'));
    }
    products.push(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify(products));
  }

  render() {
    return (
      <div>
        <Link
          to={ { pathname: '/cart' } }
        >
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => this.addProductToStorage() }
          >
            Adicionar ao carrinho
          </button>
        </Link>
      </div>
    );
  }
}

ButtonAdd.propTypes = {
  newCartItem: PropTypes.object,
}.isRequired;
