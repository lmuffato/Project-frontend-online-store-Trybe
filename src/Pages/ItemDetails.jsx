import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartIcon from './ShoppinCart/cartIcon.png';
import ReviewForm from '../components/ReviewForm';

class ItemDetails extends Component {
  addProductInCart = ({ target }) => {
    const { location: { state: { product }, handle } } = this.props;
    const quantityElment = target.parentElement.querySelector('.quantity');
    const productQuantity = parseInt(quantityElment.value, 10);
    handle(product, productQuantity);
  }

  render() {
    const { location: { state: { product } }, sumTotalItens } = this.props;
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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addProductInCart }
        >
          Adicionar ao Carrinho
        </button>
        <label htmlFor="quantity">
          Quantidade:
          <input
            className="quantity"
            name="quantity"
            type="number"
            defaultValue={ 1 }
          />
        </label>
        <Link to="/">Voltar</Link>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          <img
            alt="shopping-cart"
            className="shopping-cart-img"
            src={ cartIcon }
          />
        </Link>
        <p data-testid="shopping-cart-size">{sumTotalItens}</p>
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
    handle: PropTypes.func.isRequired,
  }).isRequired,
};

export default ItemDetails;
