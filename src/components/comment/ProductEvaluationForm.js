import React, { Component } from 'react';
import RatingStar from './RatingStar';

class ProductEvaluationForm extends Component {
  constructor() {
    super();

    const rating1 = 1;
    const rating2 = 2;
    const rating3 = 3;
    const rating4 = 4;
    const rating5 = 5;

    this.state = {
      ratingConst: [rating1, rating2, rating3, rating4, rating5],
      rating: 0,
      hoverRating: 0,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onMouseEnter = (index) => {
    this.setState({ hoverRating: index });
  };

  onMouseLeave = () => {
    this.setState({ hoverRating: 0 });
  };

  onSaveRating = (index) => {
    this.setState({ rating: index });
  };

  render() {
    const { ratingConst, rating, hoverRating } = this.state;
    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              onChange={ this.handleChange }
              placeholder="Insira seu e-mail aqui"
            />
          </label>
          <div>
            {ratingConst.map((index) => (<RatingStar
              index={ index }
              key={ index }
              rating={ rating }
              hoverRating={ hoverRating }
              onMouseEnter={ this.onMouseEnter }
              onMouseLeave={ this.onMouseLeave }
              onSaveRating={ this.onSaveRating }
            />))}
          </div>
          <label htmlFor="comment">
            Comentário
            <textarea
              name="comment"
              id="comment"
              cols="75"
              rows="10"
              onChange={ this.handleChange }
              placeholder="O que você achou produto?"
              data-testid="product-detail-evaluation"
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default ProductEvaluationForm;
