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

    this.unratedRender = this.unratedRender.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.renderItems = this.renderItems.bind(this);

    this.state = {
      rating: 0,
      stars: [],
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

  unratedRender() {
    const numberOfStars = 5;
    const starsArray = [...Array(numberOfStars)].map((star, index) => {
      const { rating } = this.state;
      return (
        <label key={ index }>
          <input className="rating-input" type="radio" name="rate" value={ index } onClick={ () => this.setState({ rating: index + 1 }) } />
          <AiFillStar className="stars" color={ index < rating ? 'yellow' : 'grey' } />
        </label>
      );
    });
    return starsArray;
  }

  async updateState() {
    const { customersRating } = this.state;
    const items = JSON.parse(window.localStorage.getItem('ratings'));
    if (items) {
      const storage = [...items, ...customersRating];
      localStorage.setItem('ratings', JSON.stringify(storage));
    } else {
      localStorage.setItem('ratings', JSON.stringify(customersRating));
    }
  }

  renderItems(items) {
    const starsNumber = 5;
    return items.map((comment, key) => (
      <div className="comment" key={ key }>
        <p>
          Email: {comment.email}
          <span>
            {[...Array(starsNumber)].map((star, index) => {
              return (
                <AiFillStar key={ index } color={ index < comment.rating ? 'yellow' : 'grey' } />
              );
            })}
          </span>
        </p>
        <p>
          Comentário: {comment.comment}
        </p>
      </div>));
  }

  async renderRating() {
    const { email, comment, rating } = this.state;
    const { id } = this.props.location.state;
    const numberOfStars = 5;
    const ratingComments = { id, email, comment, rating };
    this.setState(({ customersRating: previousState }) => ({
      customersRating: [...previousState, ratingComments],
    }), () => this.updateState());
  }

  render() {
    const { location, addToCart, shoppingCart } = this.props; // location passado por product card, resto passado por App.js
    const { state: product } = location;
    const { id, title, price, thumbnail } = product;
    const { stars, customersRating } = this.state;
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
          stars={ stars }
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
