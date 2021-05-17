import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  render() {
    const { value, handleInputChange } = this.props;

    return (
      <textarea
        data-testid="product-detail-evaluation"
        id="textArea"
        placeholder="Mensagem (opcional)"
        cols="30"
        rows="5"
        onChange={ handleInputChange }
        value={ value }
      />
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
}.isRequired;
