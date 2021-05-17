import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = this.props;
    this.state = {
      product,
    };
  }

  render() {
    const { product } = this.state;
    return (
      <section>
        <h1 data-testid="product-detail-name">{ product.title }</h1>
        <p>{ product.price }</p>
        <img src={ product.thumbnail } alt="imagem do produto" />
        <h2>Específicações Técnicas</h2>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
