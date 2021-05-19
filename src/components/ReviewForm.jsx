import React from 'react';
import Rating from 'react-rating';
import starSolid from '../imagens/starSolid.png';
import starEmpty from '../imagens/starEmpty.png';

class ReviewForm extends React.Component {
  render() {
    return (
      <form className="review-form">
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            className="email-input"
          />
          <Rating
            emptySymbol={ <img
              src={ starEmpty }
              className="icon"
              alt="star-empty"
            /> }
            fullSymbol={ <img
              src={ starSolid }
              className="icon"
              alt="star-solid"
            /> }
          />
        </div>
        <textarea
          placeholder="Mensagem (opcional)"
          className="text-area"
          data-testid="product-detail-evaluation"
        />
        <button type="submit" className="review-btn">Avaliar</button>
      </form>
    );
  }
}

export default ReviewForm;
