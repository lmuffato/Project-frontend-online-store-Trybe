import React from 'react';
import PropTypes from 'prop-types';

class PurchaseSummary extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };

    this.loadResult = this.loadResult.bind(this);
  }

  componentDidMount() {
    this.loadResult();
  }

  loadResult() {
    const { cart } = this.props;
    const { total: totalState } = this.state;
    let total = totalState;

    cart.products.forEach((product) => {
      const productPrice = product.data.price * product.quantity;
      total += productPrice;

      return total;
    });

    this.setState({
      total,
    });
  }

  render() {
    const { cart } = this.props;
    const { total } = this.state;

    return (
      <div>
        <h1>Revise seus produtos</h1>
        <ul>
          { cart.products.map((product) => (
            <li key={ product.data.id }>
              <h5 data-testid="shopping-cart-product-name2">
                {product.data.title}
              </h5>
              <h5 data-testid="shopping-cart-product-quantity2">
                {product.quantity}
              </h5>
              <h5>
                { product.quantity * product.data.price }
              </h5>
            </li>
          ))}
        </ul>
        <h4>{ `TOTAL DO PEDIDO: ${total}` }</h4>
      </div>
    );
  }
}

PurchaseSummary.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default PurchaseSummary;
