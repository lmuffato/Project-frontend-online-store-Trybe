import React, { Component } from 'react';
import { func, string } from 'prop-types';

class RatingForm extends Component {
  render() {
    const { handleInput, value, submitRate, ratingStars } = this.props; // recebe de ProductDetails.jsx
    return (
      <section className="rating-form">
        <input
          onChange={ handleInput }
          value={ value }
          type="text"
          placeholder="Digite seu email"
          name="email"
        />
        <span>{ ratingStars() }</span>
        <div>
          <textarea
            onChange={ handleInput }
            value={ value }
            data-testid="product-detail-evaluation"
            placeholder="Digite sua avaliação"
            name="comment"
          />
        </div>
        <button onClick={ submitRate } type="button">Avaliar</button>
      </section>
    );
  }
}

RatingForm.propTypes = {
  handleInput: func,
  value: string,
  submitRate: func,
  ratingStars: func,
}.isRequired;

export default RatingForm;
