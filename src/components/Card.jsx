import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';

class Card extends React.Component {
  getProductAtributes = () => {
    const { onclick, title, price, image } = this.props;
    const product = {
      title,
      image,
      quantidade: 1,
      price,
    };
    onclick(product);
  };

  render() {
    const { title, price, image } = this.props;

    return (
      <div className="card" data-testid="product">
        <p>{title}</p>
        <img src={ image } alt="foto do produto" />
        <p>{`R$: ${price}`}</p>
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
