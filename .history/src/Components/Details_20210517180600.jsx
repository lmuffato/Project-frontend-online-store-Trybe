import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.myProduct();
  }

  myProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const produc = await getProductsFromId(id);
    this.setState({ product: produc });
  }

  render() {
    const { product } = this.state;
    const { title, id, price, thumbnail, condition } = product;
    return (
      <div>
        <img src={ thumbnail } alt="imagem do produto" />
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>Identificação: {id}</p>
        <p>Preço: {price}</p>
        <p>Condição atual do Produto: {condition}</p>
        <Link to="/cart">
          <button type="button">Cart</button>
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Details;
