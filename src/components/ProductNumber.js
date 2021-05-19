import React from 'react';
import PropTypes from 'prop-types';

class ProductNumber extends React.Component {
  constructor() {
    super();

    this.state = {
      result: 0,
    };
  }

  componentDidMount() {
    this.sumQuantitys();
  }

  sumQuantitys() {
    const { cart } = this.props;
    const result = cart.reduce((soma, atual) => soma + atual.quantity, 0);
    this.setState({
      result,
    });
  }

  render() {
    const { result } = this.state;
    return (
      <span
        data-testid="shopping-cart-size"
      >
        {result}
      </span>
    );
  }
}

ProductNumber.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default ProductNumber;
