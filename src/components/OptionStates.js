import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OptionStates extends Component {
  render() {
    const { initials, name } = this.props;
    return (
      <option value={ initials }>{name}</option>
    );
  }
}

OptionStates.propTypes = {
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
