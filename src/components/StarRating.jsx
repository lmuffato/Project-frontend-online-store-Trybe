import React from 'react';
import { FaStar } from 'react-icons/fa';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      hover: 0,
    };
  }

  render() {
    const { rating, hover } = this.state;
    const qty = 5;
    return (
      <div>
        {[...Array(qty)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label htmlFor="star-rating" key={ i }>
              <input
                type="radio"
                name="rating"
                className="star-rating"
                value={ ratingValue }
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
    );
  }
}

export default StarRating;
