import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { dataId, children } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataId }
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  dataId: PropTypes.string.isRequired,
};

export default Button;
