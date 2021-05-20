import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const product = this.props;
    const { data } = this.props;
    const { title, price, image } = product;

    return (
      <div className="card" data-testid="id">
        <Link
          to={ { pathname: { title }, state: { product, data } } } // Alteração do path name para title. keys(id) não estava funcionando.
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
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;

export default Card;
