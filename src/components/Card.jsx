import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const product = this.props;
    console.log(product);
    const { title, price, image } = this.props;
    return (
      <Link
        to={ { pathname: `/${title}`, state: { product } } } // Alteração do path name para title. keys(id) não estava funcionando.
        data-testid="product-detail-link"
      >
        <div className="card" data-testid="product">
          <p>{title}</p>
          <img src={ image } alt="foto do produto" />
          <p>{ `R$: ${price}`}</p>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // key: PropTypes.string.isRequired,
};

export default Card;
