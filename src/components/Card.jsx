import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id }, onClick } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `product/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt={ title } />
          <h4>{ title }</h4>
          <h5>{ price }</h5>
        </Link>
        <button
          id={ id }
          type="button"
          onClick={ onClick }
          data-testid="product-add-to-cart"
        >
          Add
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
