import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cpf extends Component {
  render() {
    const { value, handleFunc } = this.props;
    return (
      <label htmlFor="cpf">
        Cpf:
        <div>
          <input
            data-testid="checkout-cpf"
            id="cpf"
            type="text"
            value={ value }
            onChange={ handleFunc }
          />
        </div>
      </label>
    );
  }
}

Cpf.propTypes = {
  value: PropTypes.string,
  handleFunc: PropTypes.func,
}.isRequired;

export default Cpf;
