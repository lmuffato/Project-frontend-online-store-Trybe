import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;

    return (

      <div data-testid="product">

        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/detailsPage/${id}`, state: [title, price, thumbnail] } }
        >
          <p>{title}</p>
          <p>{price}</p>
          <img style={ { width: '100px' } } src={ thumbnail } alt="imagem" />
          <button
            type="button"
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>

        </Link>

      </div>
    );
  }
}

Cards.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default Cards;
