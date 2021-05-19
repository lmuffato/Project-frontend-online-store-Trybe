import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const product = this.props;
    const { title, price, image, Sku } = product;
    return (
      <div className="card" data-testid="product">
        <Link
          to={ { pathname: { Sku }, state: { product } } } // Alteração do path name para title. keys(id) não estava funcionando.
          data-testid="product-detail-link"
        >
          <p>{title}</p>
        </Link>
        <img src={ image } alt="foto do produto" />
        <p>{ `R$: ${price}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  Sku: PropTypes.string.isRequired,
};

export default Card;