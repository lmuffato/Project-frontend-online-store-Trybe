import React from 'react';
import PropTypes from 'prop-types';
import { creatObject } from '../services/localStorage';

export default class Button extends React.Component {
  render() {
    const { item, dataTestId } = this.props;
    return (
      <button
        type="submit"
        data-testid={ dataTestId }
        className="add-to-cart"
        onClick={ () => creatObject(item) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

Button.propTypes = {
  item: PropTypes.object,
}.isRequired;
