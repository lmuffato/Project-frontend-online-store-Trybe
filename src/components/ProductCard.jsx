import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
      isFinished: false,
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  handleProduct = async () => {
    const { id } = this.props;
    const data = await api.getProduct(id);
    this.setState({ product: data, isFinished: true });
  }

  render() {
    const { isFinished, product } = this.state;
    if (!isFinished) return 'carregando';
    const {
      thumbnail,
      title,
      price,
      available_quantity: avq,
      attributes } = product;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h4 data-testid="product-detail-name">{ title }</h4>
        <h4>{ `quantidade disponivel: ${avq}` }</h4>
        <h4>{` R$: ${price} `}</h4>
        <ul>
          { isFinished && attributes.map((attribute) => (
            <li key={ attribute.id }>
              { `${attribute.name}: ${attribute.value_name}` }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductCard;
