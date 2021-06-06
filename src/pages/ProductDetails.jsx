import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { oneOfType, objectOf, object, string, number, func, arrayOf } from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import ProductInfo from '../components/ProductInfo';
import AddToCartButton from '../components/AddToCartButton';
import CartButton from '../components/CartButton';
import RatingForm from '../components/RatingForm';

class ProductDetails extends Component {
  constructor() {
    super();

    this.ratingStars = this.ratingStars.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitRate = this.submitRate.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.retrieveData = this.retrieveData.bind(this);

    this.state = {
      rating: 0,
      stars: [],
      email: '',
      comment: '',
      customersRating: [],
    };
  }

  componentDidMount() {
    const { location: { state: { id } } } = this.props;
    this.retrieveData(id);
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  retrieveData(id) {
    const storage = JSON.parse(window.localStorage.getItem(id));
    if (!storage) return null;
    const customersRating = storage.filter((item) => item.id === id);
    if (customersRating) this.setState({ customersRating });
  }

  ratingStars() {
    const numberOfStars = 5;
    const starsArray = [...Array(numberOfStars)].map((star, index) => {
      const { rating } = this.state;
      return (
        <label key={ index } htmlFor={ `star-${index}` }>
          <input
            className="rating-input"
            id={ `star-${index}` }
            type="radio"
            name="rate"
            value={ index }
            onClick={ () => this.setState({ rating: index + 1 }) }
          />
          <AiFillStar className="stars" color={ index < rating ? 'yellow' : 'grey' } />
        </label>
      );
    });
    return starsArray;
  }

  async updateStorage() {
    const { location: { state: { id } } } = this.props;
    const { customersRating } = this.state;
    const storage = [...customersRating];
    localStorage.setItem(id, JSON.stringify(storage));
  }

  async submitRate() {
    const { email, comment, rating, customersRating } = this.state;
    const { location: { state: { id } } } = this.props;
    const ratingComments = { id, email, comment, rating };
    if (customersRating.length) {
      this.setState({ customersRating: [...customersRating, ratingComments] },
        () => this.updateStorage());
    } else {
      this.setState({ customersRating: [ratingComments] }, () => this.updateStorage());
    }
  }

  renderItems(items) {
    const starsNumber = 5;
    return items.map((comment, key) => (
      <div className="comment" key={ key }>
        <p>
          Email:
          {comment.email}
          <span>
            {[...Array(starsNumber)].map((star, index) => (
              <AiFillStar
                key={ index }
                color={ index < comment.rating ? 'yellow' : 'grey' }
              />
            ))}
          </span>
        </p>
        <p>
          Comentário:
          {comment.comment}
        </p>
      </div>));
  }

  render() {
    const { location, addToCart, shoppingCart } = this.props; // location passado por product card, resto passado por App.js
    const { state: product } = location;
    const { id, title, price, thumbnail } = product;
    const { stars, customersRating } = this.state;
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
        <RatingForm
          ratingStars={ this.ratingStars }
          handleInput={ this.handleInput }
          stars={ stars }
          submitRate={ this.submitRate }
        />

        { (customersRating) && this.renderItems(customersRating) }
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
