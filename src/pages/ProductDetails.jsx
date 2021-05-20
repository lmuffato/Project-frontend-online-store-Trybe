import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { oneOfType, objectOf, object, string, number, func, arrayOf } from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import ProductInfo from '../components/ProductInfo';
import AddToCartButton from '../components/AddToCartButton';
import CartButton from '../components/CartButton';
import RatingForm from '../components/RatingForm';

class ProductDetails extends Component {
  constructor() {
    super();

    this.ratingStars = this.ratingStars.bind(this);
    this.unratedRender = this.unratedRender.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.renderItems = this.renderItems.bind(this);

    this.state = {
      rating: '',
      email: '',
      comment: '',
      customersRating: [],
    };
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  unratedRender = () => {
    const arrayRating = ['star1', 'star2', 'star3', 'star4', 'star5'];
    const rating = arrayRating.map((star, index) => (
      <AiOutlineStar onClick={ this.ratingStars } id={ index } key={ index } />
    ));
    this.setState({ rating });
  }

  ratingStars({ target }) {
    const { id } = target;
    const arrayRating = ['star1', 'star2', 'star3', 'star4', 'star5'];
    const rating = arrayRating.map((star, index) => {
      if (index <= id) {
        return <AiFillStar id={ index } onClick={ this.ratingStars } key={ index } />;
      }
      return <AiOutlineStar id={ index } onClick={ this.ratingStars } key={ index } />;
    });
    this.setState({ rating });
  }

  async updateState() {
    const { customersRating } = this.state;
    localStorage.setItem('ratings', JSON.stringify(customersRating));
  }

  renderItems(items) {
    return items.map((comment, key) => (
      <div key={ key }>
        <p>
          {comment.email}
        </p>
        <p>
          {comment.comment}
        </p>
        <p>
          {/* {comment.rating[0]} */}
        </p>
      </div>));
  }

  async renderRating() {
    const { email, comment, rating } = this.state;
    const { id } = this.props;
    const ratingComments = { id, email, comment, rating };
    this.setState(({ customersRating: previousState }) => ({
      customersRating: [...previousState, ratingComments],
    }), () => this.updateState());
  }

  render() {
    const { location, addToCart, shoppingCart } = this.props; // location passado por product card, resto passado por App.js
    const { state: product } = location;
    const { id, title, price, thumbnail } = product;
    const { rating, customersRating } = this.state;
    const cartProduct = { id, title, price, thumbnail, quantity: 1 };
    const items = JSON.parse(window.localStorage.getItem('ratings'));

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
        <RatingForm
          unratedRender={ this.unratedRender }
          handleInput={ this.handleInput }
          rating={ rating }
          renderRating={ this.renderRating }
        />

        { (items) && this.renderItems(items) }

        {customersRating.map((comment, key) => (
          <div key={ key }>
            <p>
              {comment.email}
            </p>
            <p>
              {comment.comment}
            </p>
            <p>
              {comment.rating}
            </p>
          </div>
        ))}
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
