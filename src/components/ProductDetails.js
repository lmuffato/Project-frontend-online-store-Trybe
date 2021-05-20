import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  // productDetails(data, product) {
  //   return (
  //     <div>
  //       <h1 data-testid="product-detail-name">{ data.data.title }</h1>
  //       <img src={ data.data.thumbnail } alt={ `foto ${data.data.title}` } width="400" />
  //       <p>{`R$${parseFloat(data.data.price).toFixed(2)}`}</p>
  //       <p>{product.plain_text}</p>
  //       <button type="button">
  //         <Link to="/shopcart">Carrino</Link>
  //       </button>
  //     </div>
  //   );
  // }

  render() {
    const { data, product } = this.state;
    const { data: { title } } = data;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ data.data.thumbnail } alt={ `foto ${title}` } width="400" />
        <p>{`R$${parseFloat(data.data.price).toFixed(2)}`}</p>
        <p>{product.plain_text}</p>
        <button type="button">
          <Link to="/shopcart">Carrino</Link>
        </button>
      </div>
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
