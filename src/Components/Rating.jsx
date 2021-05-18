import React, { Component } from 'react';
import Stars from './Stars';

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      ratings: {
        emai: '',
        textAre: '',
      },
      email: '',
      textArea: '',
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const email = localStorage.getItem('email');
    const textArea = localStorage.getItem('textArea');
    this.setState({
      ratings: {
        emai: email,
        textAre: textArea,
      } });
  }

  handleChangeEmail = (event) => {
    const key = event.target.name;
    const valor = event.target.value;
    this.setState({ [key]: valor });
  }

  handleClick = () => {
    const { email, textArea } = this.state;
    localStorage.setItem('email', email);
    localStorage.setItem('textArea', textArea);
    this.getLocalStorage();
  }

  render() {
    const { email, textArea, ratings: { emai, textAre } } = this.state;
    return (
      <div>
        <Stars />
        <form>
          <label htmlFor="email">
            Email
            <input
              onChange={ this.handleChangeEmail }
              value={ email }
              type="text"
              id="email"
              name="email"
              required
            />
          </label>
          <label htmlFor="mensagem">
            Mensagem
            <textarea
              data-testid="product-detail-evaluation"
              value={ textArea }
              onChange={ this.handleChangeEmail }
              type="text"
              id="mensagem"
              name="textArea"
            />
          </label>
        </form>
        <input type="submit" value="Avaliar" onClick={ this.handleClick } />
        <div className="rating">
          <h3>{emai}</h3>
          <Stars />
          <p>{textAre}</p>
        </div>
      </div>
    );
  }
}

export default Rating;
