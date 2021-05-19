import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cep extends Component {
  render() {
    const { value, handleFunc } = this.props;
    return (
      <label htmlFor="cep">
        Cep:
        <div>
          <input
            data-testid="checkout-cep"
            id="cep"
            type="text"
            value={ value }
            onChange={ handleFunc }
          />
        </div>
      </label>
    );
  }
}

Cep.propTypes = {
  value: PropTypes.string,
  handleFunc: PropTypes.func,
}.isRequired;

export default Cep;
