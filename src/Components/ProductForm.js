import React from 'react';
import { FaStar } from 'react-icons/fa';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      review: '',
      rating: 0,
    };
  }

  render() {
    console.log(this.props);
    const { rating } = this.state;
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

        { [...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label>
              <input
                className="input-radio"
                type="radio"
                name="rating"
                required
                value={ ratingValue }
                onClick={ () => this.setState({ rating: ratingValue }) }
              />
              <FaStar className="star" size={ 20 } 
              color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' } />
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
        <button type="submit" className="btn-form"> Avaliar </button>
      </form>
    );
  }
}

export default ProductForm;

// fonte: https://www.youtube.com/watch?v=eDw46GYAIDQ
// Thread: https://trybecourse.slack.com/archives/C01L16B9XC7/p1621463856112800
