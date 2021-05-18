import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { item: { title, price, id } } = this.props;

    const productsCart = JSON.parse(localStorage.getItem('productsCart'));

    const objProduct = { title, price, id, quantity: 1 };

    if (Array.isArray(productsCart)) {
      if (productsCart.some((product) => product.id === id)) {
        const productFound = productsCart.find((product) => product.id === id);
        console.log(productFound);
        productFound.quantity += 1;
      } else {
        productsCart.push(objProduct);
      }
      localStorage.setItem('productsCart', JSON.stringify(productsCart));
    } else {
      localStorage.setItem('productsCart', JSON.stringify([objProduct]));
    }
  }

  render() {
    const { item: { title, price, thumbnail, id } } = this.props;

    return (
      <div>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>
          <div data-testid="product" key={ id }>
            <h2>{ title }</h2>
            <span>{ price }</span>
            <img src={ thumbnail } alt="alt" />
            {/*  <Link
              to={ {
                pathname: '/shopping-cart',
                search: '?sort=name',
                state: { title, price } } }
            >
              Adicionar ao Carrinho
            </Link> */}
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default CardItem;
