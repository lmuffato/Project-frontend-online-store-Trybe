import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { oneOfType, objectOf, object, string, number, func, arrayOf } from 'prop-types';
import ProductInfo from '../components/ProductInfo';
import AddToCartButton from '../components/AddToCartButton';
import CartButton from '../components/CartButton';
import RatingForm from '../components/RatingForm';

class ProductDetails extends Component {
  render() {
    const { location, addToCart, shoppingCart } = this.props; // location passado por product card, resto passado por App.js
    const { state: product } = location;
    const { id, title, price, thumbnail } = product;
    const cartProduct = { id, title, price, thumbnail, quantity: 1 };
    return (
      <>
        <section className="product-details">
          <CartButton shoppingCart={ shoppingCart } />
          <ProductInfo product={ product } />
          <Link to="/">Voltar</Link>
          <AddToCartButton
            cartProduct={ cartProduct }
            addToCart={ addToCart }
            testid="product-detail-add-to-cart"
          />
        </section>
        <RatingForm />
        {/* <ComentSection /> */}
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: objectOf(oneOfType([string, number, object])),
  addToCart: func,
  shoppingCart: arrayOf(objectOf(oneOfType([string, number]))),
}.isRequired;

export default ProductDetails;
