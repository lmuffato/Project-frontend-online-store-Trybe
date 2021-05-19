import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FullName extends Component {
  render() {
    const { value, handleFunc } = this.props;
    return (
      <label htmlFor="fullName">
        Nome Completo:
        <div>
          <input
            data-testid="checkout-fullname"
            id="fullName"
            type="text"
            value={ value }
            onChange={ handleFunc }
          />
        </div>
      </label>
    );
  }
}

FullName.propTypes = {
  value: PropTypes.string,
  handleFunc: PropTypes.func,
}.isRequired;

export default FullName;
