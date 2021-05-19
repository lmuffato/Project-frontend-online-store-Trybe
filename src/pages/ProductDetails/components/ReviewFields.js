import React from 'react';
import PropTypes from 'prop-types';

class ReviewFields extends React.Component {
  constructor() {
    super();

    this.state = {
      emailField: '',
      textField: '',
      ratingValue: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.toEvaluate = this.toEvaluate.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  toEvaluate({ target }) {
    this.setState({
      ratingValue: target.value,
    });
  }

  submit() {
    const { emailField, textField, ratingValue } = this.state;
    const { getReview, productReviews } = this.props;

    const alertMessage = document.getElementById('alert');
    const repeated = productReviews.reviews.find((review) => review.email === emailField);

    if (emailField === '' || ratingValue === 0) {
      alertMessage.innerText = 'O campo de e-mail e a avaliação são obrigatórios';
      return;
    } if (repeated !== undefined) {
      alertMessage.innerText = 'Existe uma avaliação com este email';
      return;
    }

    const review = {
      email: emailField,
      review: textField,
      rating: ratingValue,
    };

    getReview(review);
  }

  render() {
    const { emailField, textField } = this.state;

    return (
      <section>
        <h2>Avaliação</h2>
        <form>
          <input
            type="email"
            value={ emailField }
            id="emailField"
            onChange={ this.handleChange }
            placeholder="Email"
          />
          <button type="button" onClick={ this.toEvaluate } value="1">1</button>
          <button type="button" onClick={ this.toEvaluate } value="2">2</button>
          <button type="button" onClick={ this.toEvaluate } value="3">3</button>
          <button type="button" onClick={ this.toEvaluate } value="4">4</button>
          <button type="button" onClick={ this.toEvaluate } value="5">5</button>
          <textarea
            data-testid="product-detail-evaluation"
            id="textField"
            value={ textField }
            onChange={ this.handleChange }
            placeholder="Mensagem (opcional)"
          />
        </form>
        <span id="alert" />
        <button
          type="button"
          onClick={ this.submit }
        >
          Avaliar
        </button>
      </section>
    );
  }
}

ReviewFields.propTypes = {
  getReview: PropTypes.func,
}.isRequired;

export default ReviewFields;
