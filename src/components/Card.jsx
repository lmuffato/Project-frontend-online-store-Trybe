import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Card.css';

class Card extends React.Component {
  getProductAtributes = () => {
    const { onclick, title, price, image } = this.props;
    const productData = {
      title,
      image,
      quantidade: 1,
      price,
    };
    onclick(productData);
  };

  render() {
    const product = this.props;
    const { title, price, image } = product;

    return (
      <div className="card" data-testid="product">
        <Link
          to={ { pathname: { title }, state: { product } } } // Alteração do path name para title. keys(id) não estava funcionando.
          data-testid="product-detail-link"
        >
          <p>{title}</p>
        </Link>
        <img src={ image } alt="foto do produto" />
        <p>{ `R$: ${price}`}</p>
        <button
          onClick={ this.getProductAtributes }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>

    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Card;
