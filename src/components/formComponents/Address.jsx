import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  render() {
    const { value, handleFunc } = this.props;
    return (
      <label htmlFor="address">
        Address:
        <div>
          <input
            data-testid="checkout-address"
            id="address"
            type="text"
            value={ value }
            onChange={ handleFunc }
          />
        </div>
      </label>
    );
  }
}

Address.propTypes = {
  value: PropTypes.string,
  handleFunc: PropTypes.func,
}.isRequired;

export default Address;
