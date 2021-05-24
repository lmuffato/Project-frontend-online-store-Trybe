import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductReview extends Component {
  render() {
    const {
      product: { title, thumbnailId, price, amount },
    } = this.props;
    return (
      <tr className="product">
        <td>
          <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp` } alt="Imagem do produto" />
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
    thumbnailId: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};
