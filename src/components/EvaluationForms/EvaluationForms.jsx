import React, { Component } from 'react';
import './EvaluationForms.css';

class EvaluationForms extends Component {
  render() {
    return (
      <form className="forms" action="">
        <label htmlFor="email">
          Email
          <input type="text" />
        </label>
        <label htmlFor="message">
          Mensagem
          <textarea
            data-testid="product-detail-evaluation"
          />
        </label>
        <label htmlFor="score">
          Avaliação
          <input
            type="number"
            min="1"
            max="5"
          />
        </label>
        <button type="submit">Avaliar</button>
      </form>
    );
  }
}

export default EvaluationForms;
