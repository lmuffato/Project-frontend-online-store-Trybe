import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductEvaluation from './ProductEvaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match, location } = this.props;
    const { params } = match;
    const { state } = location;

    this.state = {
      id: params.id,
      data: state,
      product: '',
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = async () => {
    const { id } = this.state;
    const data = await fetch(`https://api.mercadolibre.com/items/${id}/description?api_version=2`);
    const product = await data.json();
    this.setState({ product });
  }

  render() {
    const { data, product } = this.state;
    const { data: { title, price, thumbnail } } = data;
    return (
      <section>
        <div className="product-details">
          <h1 data-testid="product-detail-name">{ title }</h1>
          <img src={ thumbnail } alt={ `foto ${title}` } width="400" />
          <p>{`R$${parseFloat(price).toFixed(2)}`}</p>
          <p>{product.plain_text}</p>
          <button type="button">
            <Link to="/shopcart">Carrinho</Link>
          </button>
        </div>
        <div className="product-evaluation">
          <ProductEvaluation />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape({
        data: PropTypes.shape({
          title: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
