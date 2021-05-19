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
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  submit() {
    const { emailField, textField, ratingValue } = this.state;
    const { getReview } = this.props;
    const review = {
      email: emailField,
      review: textField,
      rating: ratingValue,
    };

    getReview(review);
  }

  render() {
    const { emailField, textField, ratingValue } = this.state;

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
          <input
            type="number"
            min="0"
            max="5"
            id="ratingValue"
            value={ ratingValue }
            onChange={ this.handleChange }
          />
          <textarea
            data-testid="product-detail-evaluation"
            id="textField"
            value={ textField }
            onChange={ this.handleChange }
            placeholder="Mensagem (opcional)"
          />
        </form>
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
