import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ButtonAdd extends Component {
  constructor() {
    super();
    this.addProductToStorage = this.addProductToStorage.bind(this);
  }

  addProductToStorage = () => {
    const { newCartItem } = this.props;
    const { title, thumbnail, price, id } = newCartItem;
    const storageItems = JSON.parse(localStorage.getItem('cartItems'));
    const productObject = { title, thumbnail, price, id, quantity: 1 };
    // Para essa função contamos com o auxílio do repositório do grupo 2
    // e também do link:
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    if (Array.isArray(storageItems)) {
      if (storageItems.some((item) => item.id === id)) {
        const productFound = storageItems.find((item) => item.id === id);
        productFound.quantity += 1;
      } else {
        storageItems.push(productObject);
      }
      localStorage.setItem('cartItems', JSON.stringify(storageItems));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([productObject]));
    }
  }

  render() {
    const { classDataTest } = this.props;
    return (
      <div>
        <Link
          to={ { pathname: '/cart' } }
        >
          <button
            data-testid={ classDataTest }
            type="button"
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
