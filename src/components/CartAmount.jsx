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
    const { onChange, id, maxQuantity } = this.props;
    const { count } = this.state;
    if (count < maxQuantity) {
      api2.addToLocalStorage(id);
      this.setState((estadoAnterior) => ({
        count: estadoAnterior.count + 1,
      }));
      onChange();
    }
  }

  handleDecreaseClick = () => {
    const { onChange } = this.props;

    const { id } = this.props;
    const { count } = this.state;
    if (count > 1) {
      this.setState((estadoAnterior) => ({
        count: estadoAnterior.count - 1,
      }));
      onChange();
      api2.removeFromLocalStorage(id);
    }
  }

  fetchComponentState = () => {
    const { quantity } = this.props;
    this.setState({ count: quantity });
  }

  handleExclusion = ({ target }) => {
    // const { onChange } = this.props;
    const { id } = target;

    const getDiv = document.querySelector(`#${id}`);
    getDiv.remove();
    api2.deleteEveryFromLocalStorage(id);
    // onChange();
  }

  render() {
    const { id, title } = this.props;
    const { count } = this.state;
    return (
      <div id={ id }>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <p
          data-testid="shopping-cart-product-quantity"
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
  onChange: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number.isRequired,
};

export default CartAmount;
