import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1 };
  }

  handleClick = () => {
    const { product, addToCart } = this.props;
    const { title, price, id } = product;
    const { amount } = this.state;

    this.setState((prevState) => ({
      amount: prevState.amount + 1,
    }));

    addToCart(id, {
      title,
      price,
      amount,
      id,
    });
  };

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;

    return (
      <>
        <div data-testid="product">
          <h2>{title}</h2>
          <img src={ thumbnail } alt="Imagem do produto" />
          <h3>{price}</h3>
          <div className="cart-button">
            <button
              className="add-cart-button"
              type="button"
              name={ id }
              onClick={ this.handleClick }
              data-testid="product-add-to-cart"
            >
              <i className="bi bi-cart-plus button-icon" />
            </button>
          </div>
        </div>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: title, state: { product } } }
        >
          Ver detalhes
        </Link>
      </>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
