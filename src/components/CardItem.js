import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cartStorage } from '../services/api2';

class CardItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { item } = this.props;
    cartStorage(item);
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
