import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Email extends Component {
  render() {
    const { value, handleFunc } = this.props;
    return (
      <label htmlFor="name">
        Email:
        <div>
          <input
            data-testid="checkout-email"
            id="email"
            type="email"
            value={ value }
            onChange={ handleFunc }
          />
        </div>
      </label>
    );
  }
}

Email.propTypes = {
  value: PropTypes.string,
  handleFunc: PropTypes.func,
}.isRequired;

export default Email;
