import React from 'react';
import PropTypes from 'prop-types';

import TextArea from './EvaluationForm/TextArea';
import Input from './EvaluationForm/Input';

class Evaluation extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: '',
      input: 0,
      listOfReviews: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
  }

  handleInputChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  // Source: https://github.com/tryber/sd-07-project-frontend-online-store/tree/b49305a373b81b98d867922f0b9033a4645cade0
  renderReviews() {
    const { listOfReviews } = this.state;
    return (
      <div>
        <h3>Comentários</h3>
        {
          listOfReviews.map((review) => (
            <div key={ review.id }>
              <h4>{ review.title }</h4>
              <p>{ review.content }</p>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    const { textArea, input, listOfReviews } = this.state;

    return (
      <div>
        <form>
          <h2>Avaliação</h2>
          <TextArea
            handleInputChange={ this.handleInputChange }
            value={ textArea }
          />
          <Input
            handleInputChange={ this.handleInputChange }
            value={ input }
          />
          <button type="button">Avaliar</button>
        </form>
        { !listOfReviews.length ? <h3>Sem Comentários</h3> : this.renderReviews()}
      </div>
    );
  }
}

Evaluation.propTypes = {
  textArea: PropTypes.string,
  input: PropTypes.number,
  listOfReviews: PropTypes.array,
}.isRequired;

export default Evaluation;
