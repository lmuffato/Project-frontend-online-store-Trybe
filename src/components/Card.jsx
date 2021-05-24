import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const product = this.props;
    const { title, price, image, availableQuantity } = this.props;
    return (
      <div className="card">
        <Link
          to={ { pathname: `/${title}`, state: { product } } } // Alteração do path name para title. keys(id) não estava funcionando.
          data-testid="product-detail-link"
        >
          <p>{title}</p>
        </Link>
        <img src={ image } alt="foto do produto" />
        <p>{ `R$: ${price}`}</p>
        <p>{ `Available Quantity: ${availableQuantity}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  // key: PropTypes.string.isRequired,
};

export default Card;
