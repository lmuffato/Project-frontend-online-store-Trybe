import React from 'react';
import PropTypes from 'prop-types';
import * as api2 from '../services/api2';

class CartAmount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.fetchComponentState();
  }

  handleIncreaseClick = () => {
    const { id } = this.props;
    api2.addToLocalStorage(id);
    this.setState((estadoAnterior) => ({
      count: estadoAnterior.count + 1,
    }));
  }

  handleDecreaseClick = () => {
    const { id } = this.props;
    const { count } = this.state;
    if (count > 1) {
      this.setState((estadoAnterior) => ({
        count: estadoAnterior.count - 1,
      }));
      api2.removeFromLocalStorage(id);
    }
  }

  fetchComponentState = () => {
    const { quantity } = this.props;
    this.setState({ count: quantity });
  }

  handleExclusion = ({ target }) => {
    const { id } = target;
    console.log(id);
    const getDiv = document.querySelector(`#${id}`);
    getDiv.remove();
    api2.deleteEveryFromLocalStorage(id);
  }

  render() {
    const { id, title, handleQuantityChange } = this.props;
    const { count } = this.state;
    return (
      <div id={ id }>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <p
          data-testid="shopping-cart-product-quantity"
          onChange={ handleQuantityChange }
        >
          {count}
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleIncreaseClick }
        >
          +

        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleDecreaseClick }
        >
          -

        </button>
        <button type="button" id={ id } onClick={ this.handleExclusion }>x</button>
      </div>
    );
  }
}

CartAmount.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default CartAmount;
