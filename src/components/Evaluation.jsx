import React, { Component } from 'react';

class Evaluation extends Component {
  render() {
    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          name="evaluation-text"
          id="evaluation-text"
          cols="30"
          rows="10"
        />
        <input type="number" name="" id="" max="5" />
      </div>
    );
  }
}

export default Evaluation;
