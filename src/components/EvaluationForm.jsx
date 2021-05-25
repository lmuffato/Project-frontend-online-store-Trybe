import React, { Component } from 'react';
import EvaluationStar from './evaluationStar/EvaluationStar';
import StarComent from './evaluationStar/StarComent';

// referencias: https://medium.com/@lameckanao/armazenando-e-manipulando-dados-no-localstorage-7bcc901ba12b
export default class EvaluetionForm extends Component {
  constructor() {
    super();
    const obj = JSON.parse(localStorage.getItem('evaluation'));
    this.state = {
      stars: 0,
      storageItems: obj,
    };
    this.functionValue = this.functionValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { stars } = this.state;
    if (prevState.stars !== stars) {
      return this.handleStar();
    }
  }

  handleStar(value) {
    console.log('index', value);
    if (value || value === 0) {
      this.setState({ stars: value });
    }
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  functionValue(event) {
    event.preventDefault();
    const { stars, email, coment } = this.state;
    const object = { stars, email, coment };
    if (localStorage.getItem('evaluation')) {
      localStorage.setItem(
        'evaluation',
        JSON.stringify([...JSON.parse(localStorage.getItem('evaluation')), object]),
      );
    }
    if (!localStorage.getItem('evaluation')) {
      localStorage.setItem('evaluation', JSON.stringify([object]));
    }
    const obj = JSON.parse(localStorage.getItem('evaluation'));
    this.setState({ storageItems: obj });
    this.setState({ email: '', coment: '', stars: 0 });
    // this.handleStar(0);/
  }

  render() {
    const { coment, email, storageItems, stars } = this.state;
    console.log(storageItems);
    return (
      <div>
        <h2>Avaliações</h2>
        <form>
          <input
            value={ email }
            placeholder="Email"
            onChange={ (event) => this.handleChange('email', event.target.value) }
            type="email"
            name="evaluetionEmail"
          />
          <textarea
            value={ coment }
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            name="evaluetionText"
            onChange={ (event) => this.handleChange('coment', event.target.value) }
          />
          <button onClick={ this.functionValue } value="Avaliar" type="button">
            Avaliar
          </button>
          <EvaluationStar
            stars={ stars }
            onChange={ (value) => this.handleStar(value) }
          />
        </form>
        <div>
          { storageItems ? storageItems
            .map((oobj) => (
              <div key={ oobj.email }>
                <p>{ oobj.email }</p>
                <p>{ oobj.coment }</p>
                <StarComent setStar={ oobj.stars } />
              </div>)) : '' }
        </div>
      </div>
    );
  }
}
