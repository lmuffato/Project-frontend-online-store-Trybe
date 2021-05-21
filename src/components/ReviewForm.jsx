import React from 'react';
import { FaStar } from 'react-icons/fa';
// Baseado em https://www.youtube.com/watch?v=eDw46GYAIDQ

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hover: 0,
      email: '',
      text: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   const { email, rating, text } = this.state;
  //   const reviewObj = {
  //     email,
  //     rating,
  //     text,
  //   };
  // }

  render() {
    const { rating, hover, email, text } = this.state;
    const qty = 5;
    return (
      <form className="review-form">
        <div className="email-star">
          <input
            type="email"
            placeholder="Email"
            required
            className="email-input"
            onChange={ this.handleChange }
            value={ email }
            name="email"
          />
          {[...Array(qty)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label htmlFor="star-rating" key={ i }>
                <input
                  type="radio"
                  className="star-rating"
                  value={ ratingValue }
                  required
                />
                <FaStar
                  size="25"
                  className="star"
                  color={ ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                  onMouseEnter={ () => this.setState({ hover: ratingValue }) }
                  onMouseLeave={ () => this.setState({ hover: 0 }) }
                  onClick={ () => this.setState({ rating: ratingValue }) }
                />
              </label>
            );
          })}
        </div>
        <textarea
          placeholder="Mensagem (opcional)"
          className="text-area"
          data-testid="product-detail-evaluation"
          onChange={ this.handleChange }
          value={ text }
          name="text"
        />
        <button
          type="submit"
          className="review-btn"
          // onClick={ this.handleClick }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

export default ReviewForm;
