import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div className="products-cards">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/detailsPage/${id}`, state: [title, price, thumbnail] } }
        >
          <div data-testid="product">
            <p>{title}</p>
            <p>{price}</p>
            <img style={ { width: '100px' } } src={ thumbnail } alt="imagem" />
            <button
              type="submit"
              data-testid="product-add-to-cart"
              onClick={ this.handleButton }
            >
              Adicionar ao carrinho
            </button>
          </div>
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
