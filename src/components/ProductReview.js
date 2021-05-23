import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductReview extends Component {
  render() {
    const {
      product: { title, thumbnail, price, amount },
    } = this.props;
    return (
      <tr className="product">
        <td>
          <img src={ thumbnail } alt="Imagem do produto no carrinho" />
          {title}
        </td>
        <td>{amount}</td>
        <td>{`R$ ${parseFloat(price).toFixed(2)}`}</td>
      </tr>
    );
  }
}

ProductReview.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};
