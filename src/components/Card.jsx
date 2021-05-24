import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const product = this.props;
    const { title, price, image, shipping, availableQuantity } = this.props;
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
        {shipping.free_shipping === true
          ? <p data-testid="free-shipping">Frete Gratis</p>
          : null}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  availableQuantity: PropTypes.number.isRequired,
  shipping: PropTypes.shape({
  free_shipping: PropTypes.bool,
  }).isRequired,
}.isRequired;

export default Card;
