import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <label htmlFor="button-submit">
          <input
            data-testid="query-button"
            name="button-submit"
            onClick={ onClick }
            type="submit"
          />
        </label>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
