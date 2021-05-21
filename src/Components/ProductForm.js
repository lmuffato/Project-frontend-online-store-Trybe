import React from 'react';
import { FaStar } from 'react-icons/fa';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      review: '',
      rating: 0,
      hover: 0,
    };
  }

  handleBtn = () => {
    const { review, email } = this.state;
    console.log(review, email);
  }

  render() {
    const { rating, hover } = this.state;
    const maxStars = 5;
    return (

      <form className="form">
        {' '}
        Avaliações
        <br />
        <br />

        <label htmlFor="email">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            required
            onChange={ (event) => this.setState({ email: event.target.value }) }
          />
        </label>

        { [...Array(maxStars)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={ index } htmlFor="rating">
              <input
                className="input-radio"
                type="radio"
                name="rating"
                required
                value={ ratingValue }
                onClick={ () => this.setState({ rating: ratingValue }) }
              />
              <FaStar
                className="star"
                size={ 20 }
                color={ ratingValue <= (rating || hover) ? '#ffc107' : '#e4e5e9' }
                onClick={ () => this.setState({ rating: ratingValue }) }
                onMouseEnter={ () => this.setState({ hover: ratingValue }) }
                onMouseLeve={ () => this.setState({ hover: 0 }) }
              />
            </label>
          );
        })}

        <label htmlFor="review">
          {' '}
          <br />
          <br />
          <textarea
            data-testid="product-detail-evaluation"
            type="text"
            name="review"
            placeholder="Mensagem (opcional)"
            onChange={ (event) => this.setState({ review: event.target.value }) }
          />
        </label>
        {' '}
        <br />
        <button
          type="button"
          className="btn-form"
          onClick={ this.handleBtn }
        >
          {' '}
          Avaliar
        </button>
      </form>
    );
  }
}

export default ProductForm;

// fonte: https://www.youtube.com/watch?v=eDw46GYAIDQ
// Thread: https://trybecourse.slack.com/archives/C01L16B9XC7/p1621463856112800
