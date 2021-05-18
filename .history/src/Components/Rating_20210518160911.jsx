import React, { Component } from 'react';
import Stars from './Stars';

class Rating extends Component {
  render() {
    return (
      <div>
        <Stars />
        <label htmlFor="email">
          Email
          <input type="text" id="email" name="email" required />
        </label>
        <label htmlFor="mensagem">
          Mensagem
          <textarea type="checkbox" id="mensagem" name="mensagem" />
        </label>
        <input type="submit" value="Avaliar" />
      </div>
    );
  }
}

export default Rating;
