import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      dataId,
      maxLength,
      className,
      name,
      value,
      placeHolder,
      onChange,
    } = this.props;

    return (
      <input
        type={ type }
        data-testid={ dataId }
        maxLength={ maxLength }
        className={ className }
        name={ name }
        value={ value }
        placeholder={ placeHolder }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  dataId: PropTypes.string,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Input;
