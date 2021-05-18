import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';

class cardItem extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <Link
        to={ {
          pathname: `/productDetails/${id}`,
          state: { thumbnail, title, price },
        } }
        data-testid="product-detail-link"
      >
        <div data-testid="product" className="product">
          <img src={ thumbnail } alt="produto" />
          <h3>{title}</h3>
          <span>{`R$ ${price}`}</span>
        </div>
      </Link>
    );
  }
}

cardItem.propTypes = {
  title: string,
  image: string,
  price: number,
}.isRequired;

export default cardItem;
