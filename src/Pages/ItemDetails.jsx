import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartIcon from './ShoppinCart/cartIcon.png';
import ReviewForm from '../components/ReviewForm';

class ItemDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <main>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <div>
          <p>{ `R$ ${price.toFixed(2)}` }</p>
          <p>detalhes do item</p>
        </div>
        <ReviewForm product={ product } />
        <Link to="/">Voltar</Link>
        <Link
          to="/ShoppingCart"
        >
          <img
            alt="shopping-cart"
            className="shopping-cart-img"
            src={ cartIcon }
          />
        </Link>
      </main>
    );
  }
}

ItemDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default ItemDetails;
