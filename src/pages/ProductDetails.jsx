import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      product: undefined,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductById(id).then((product) => {
      console.log(product);
      this.setState({
        loading: false,
        product,
      });
    });
  }

  render() {
    const { product, loading } = this.state;
    return (loading
      ? <Loading />
      : (
        <section>
          <h1 data-testid="product-detail-name">{ product.title }</h1>
          <p>{ product.price }</p>
          <img src={ product.thumbnail } alt="imagem do produto" />
          <h2>Específicações Técnicas</h2>
        </section>
      )
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
