import React, { Component } from 'react';
import Stars from './Stars';

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      ratings: {},
    };
  }

  render() {
    return (
      <div>
        <Stars />
        <form>
          <label htmlFor="email">
            Email
            <input type="text" id="email" name="email" required />
          </label>
          <label htmlFor="mensagem">
            Mensagem
            <textarea type="checkbox" id="mensagem" name="mensagem" />
          </label>
        </form>
        <input type="submit" value="Avaliar" />
      </div>
    );
  }
}

export default Rating;
