import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super();

    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    const { obj } = this.props;
    const newObj = obj;
    let previousObj = JSON.parse(localStorage.getItem('cartItems'));

    if (previousObj) {
      previousObj = [...previousObj, newObj];

      for (let i = 0; i < previousObj.length; i += 1) {
        for (let index = 0; index < previousObj.length; index += 1) {
          if (previousObj[i].id === previousObj[index].id && i !== index) {
            previousObj[i].qtd += 1;
            previousObj.splice(index);
          }
        }
      }

      localStorage.setItem('cartItems', JSON.stringify(previousObj));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([newObj]));
    }
  }

  render() {
    const { dataTestId } = this.props;
    return (
      <button
        type="button"
        onClick={ this.addCart }
        data-testid={ dataTestId }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

Button.propTypes = {
  clickFunc: PropTypes.func,
}.isRequired;

export default Button;
