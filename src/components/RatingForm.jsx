import React, { Component } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

class RatingForm extends Component {
  constructor() {
    super();

    this.ratingStars = this.ratingStars.bind(this);

    this.state = {
      rating: '',
    };
  }

  componentDidMount() {
    this.unratedRender();
  }

  unratedRender = () => {
    const arrayRating = ['star1', 'star2', 'star3', 'star4', 'star5'];
    const rating = arrayRating.map((star, index) => (
      <AiOutlineStar onClick={ this.ratingStars } id={ index } key={ index } />
    ));
    this.setState({ rating });
  }

  ratingStars({ target }) {
    const { id } = target;
    console.log(target);
    const arrayRating = ['star1', 'star2', 'star3', 'star4', 'star5'];
    const rating = arrayRating.map((star, index) => {
      if (index <= id) {
        return <AiFillStar id={ index } onClick={ this.ratingStars } key={ index } />;
      }
      return <AiOutlineStar id={ index } onClick={ this.ratingStars } key={ index } />;
    });
    this.setState({ rating });
  }

  render() {
    const { rating } = this.state;
    return (
      <section className="rating-form">
        <input type="text" placeholder="Digite seu email" name="email-input" />
        <span>{ rating }</span>
        <div>
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Digite sua avaliação"
            name="comment-rating"
          />
        </div>
        <button type="button">Avaliar</button>
      </section>
    );
  }
}

export default RatingForm;
