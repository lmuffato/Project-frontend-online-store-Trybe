import React, { Component } from 'react';

class RatingForm extends Component {
  render() {
    const { handleInput, value, renderRating, unratedRender } = this.props; // recebe de ProductDetails.jsx
    return (
      <section className="rating-form">
        <input
          onChange={ handleInput }
          value={ value }
          type="text"
          placeholder="Digite seu email"
          name="email"
        />
        <span>{ unratedRender() }</span>
        <div>
          <textarea
            onChange={ handleInput }
            value={ value }
            data-testid="product-detail-evaluation"
            placeholder="Digite sua avaliação"
            name="comment"
          />
        </div>
        <button onClick={ renderRating } type="button">Avaliar</button>
      </section>
    );
  }
}

export default RatingForm;
