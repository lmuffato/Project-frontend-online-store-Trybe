import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          .
          <input type="text" id="email" name="email" required />
        </label>
        <label htmlFor="mensagem">
          .
          <textarea type="checkbox" id="mensagem" name="mensagem" />
        </label>
      </div>
    );
  }
}

export default Rating;
