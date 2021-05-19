import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      avaliation: 0,
      message: '',
      saveAvaliation: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValues = this.handleValues.bind(this);
  }

  componentDidUpdate() {
    const { saveAvaliation } = this.state;
    localStorage.setItem('avaliation', JSON.stringify(saveAvaliation));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, avaliation, message } = this.state;
    const obj = { email, avaliation, message };
    this.setState((prevState) => ({
      saveAvaliation: [...prevState.saveAvaliation, obj],
    }));
  }

  handleValues({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, avaliation, message } = this.state;
    const avaliationStorage = JSON.parse(localStorage.getItem('avaliation'));
    return (
      <>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              onChange={ this.handleValues }
              value={ email }
            />
            <select
              name="avaliation"
              onChange={ this.handleValues }
              value={ avaliation }
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Mensagem (opcional)"
            onChange={ this.handleValues }
            value={ message }
            data-testid="product-detail-evaluation"
          />
          <button type="submit">Avaliar</button>
        </form>
        {
          (avaliationStorage !== null) ? (
            avaliationStorage.map((value, index) => (
              <div key={ index }>
                <p>{ value.email }</p>
                <p>{ value.avaliation}</p>
                <p>{value.message}</p>
              </div>
            ))
          ) : ''
        }
      </>

    );
  }
}
