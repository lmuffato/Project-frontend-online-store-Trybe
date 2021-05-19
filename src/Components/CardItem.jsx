import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

class cardItem extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <Link
        to={ {
          pathname: `/productDetails/${id}`,
          state: { thumbnail, title, price, id },
        } }
        data-testid="product-detail-link"
      >
        <div data-testid="product" className="product">
          <img src={ thumbnail } alt="produto" />
          <h3>{title}</h3>
          <span>{`R$ ${price}`}</span>
          <br />
          <AddCart id={ id } />
        </div>
      </Link>
    );
  }
}

cardItem.propTypes = {
  title: string,
  image: string,
  price: number,
  id: string,
}.isRequired;

export default cardItem;
