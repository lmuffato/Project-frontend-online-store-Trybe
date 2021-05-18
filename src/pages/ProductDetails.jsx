import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: product } } = this.props;
    // Use o log abaixo para verificar todas as informações que temos sobre o produto
    // console.log(Object.entries(product));
    const { title, price, thumbnail } = product;
    return (
      <section>
        <h2 data-testid="product-detail-name">
          {`${title} - R$ ${price}`}
        </h2>
        <img src={ thumbnail } alt={ `Produto ${title}` } />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
};
export default ProductDetails;
