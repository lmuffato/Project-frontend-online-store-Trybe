import React from 'react';
import StarRating from './StarRating';

class ReviewForm extends React.Component {
  render() {
    return (
      <form className="review-form">
        <div className="email-star">
          <input
            type="email"
            placeholder="Email"
            required
            className="email-input"
          />
          <StarRating />
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
