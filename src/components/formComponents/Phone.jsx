import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Phone extends Component {
  render() {
    const { value, handleFunc } = this.props;
    return (
      <label htmlFor="phone">
        Phone:
        <div>
          <input
            data-testid="checkout-phone"
            id="phone"
            type="text"
            value={ value }
            onChange={ handleFunc }
          />
        </div>
      </label>
    );
  }
}

Phone.propTypes = {
  value: PropTypes.string,
  handleFunc: PropTypes.func,
}.isRequired;

export default Phone;
