import React from 'react';
import PropTypes from 'prop-types';

class EvaluationFields extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: 'Email',
      textareaValue: 'Mensagem (opcional)',
      ratingValue: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange({ target }) {
    if (target.id === 'emailField') {
      this.setState({
        inputValue: target.value,
      });
    } else if (target.id === 'textField') {
      this.setState({
        textareaValue: target.value,
      });
    } else {
      this.setState({
        ratingValue: target.value,
      });
    }
  }

  submit() {
    const { inputValue, textareaValue, ratingValue } = this.state;
    const { reapEvaluation } = this.props;
    const evaluation = {
      email: inputValue,
      evaluation: textareaValue,
      rating: ratingValue,
    };

    reapEvaluation(evaluation);
  }

  render() {
    const { inputValue, textareaValue, ratingValue } = this.state;

    return (
      <section>
        <h2>Avaliação</h2>
        <form>
          <input
            type="email"
            value={ inputValue }
            id="emailField"
            onChange={ this.handleChange }
          />
          <input
            type="number"
            min="0"
            max="5"
            value={ ratingValue }
            onChange={ this.handleChange }
          />
          <textarea
            data-testid="product-detail-evaluation"
            id="textField"
            value={ textareaValue }
            onChange={ this.handleChange }
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

EvaluationFields.propTypes = {
  reapEvaluation: PropTypes.func,
}.isRequired;

export default EvaluationFields;
