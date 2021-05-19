import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createEvaluation } from '../../services/evaluationAPI';
import './EvaluationForms.css';

class EvaluationForms extends Component {
  constructor() {
    super();
    this.state = this.initialState();
    this.handleForm = this.handleForm.bind(this);
  }

  async handleForm(event) {
    event.preventDefault();
    const { email, score } = this.state;
    const { id } = this.props;
    if (email === '') {
      return console.warn('É necessário fornecer um email');
    }
    if (score === '') {
      return console.warn('É necessário fornecer uma nota');
    }
    await createEvaluation(id, this.state);
    console.log('Avaliação enviada com sucesso!');
    this.setState(this.initialState());
  }

  initialState() {
    return {
      email: '',
      message: '',
      score: '',
    };
  }

  // Baseado no MovieForm.js do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { email, message, score } = this.state;
    return (
      <form className="forms" action="">
        <label htmlFor="email">
          Email (obrigatório)
          <input
            name="email"
            type="text"
            value={ email }
            onChange={ (event) => this.updateState('email', event.target.value) }
          />
        </label>
        <label htmlFor="score">
          Nota (obrigatória)
          <input
            name="score"
            type="number"
            min="1"
            max="5"
            value={ score }
            onChange={ (event) => this.updateState('score', event.target.value) }
          />
        </label>
        <label htmlFor="message">
          Mensagem (opcional)
          <textarea
            data-testid="product-detail-evaluation"
            name="message"
            value={ message }
            onChange={ (event) => this.updateState('message', event.target.value) }
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleForm }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

EvaluationForms.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EvaluationForms;
