import React from 'react';
import PropTypes from 'prop-types';
import BuyerInformation from './BuyerInformation';
import Payment from './Payment';

class PurchaseSummary extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: {},
    };
  }

  TotalPrice() {
    const { location: { state: { total } } } = this.props;
    this.setState = {
      totalPrice: total,
    };
  }

  render() {
    const { cart } = this.props;
    const { totalPrice } = this.state;
    if (!cart) return <h1>Loading...</h1>;

    return (
      <div>
        <h1>Revise seus produtos</h1>
        {
          cart.length === 0
            ? <h1 data-testid="shopping-cart-empty-message2">Seu carrinho está vazio</h1>
            : (
              <ul>
                { cart.map((product) => (
                  <li key={ product.data.id }>
                    <h5 data-testid="shopping-cart-product-name2">
                      {product.data.title}
                    </h5>
                    <h5 data-testid="shopping-cart-product-quantity2">
                      {product.quantity}
                    </h5>
                    <h5>{product.data.price}</h5>
                    <h5>{ totalPrice }</h5>
                  </li>
                ))}
              </ul>
            )
        }
        <BuyerInformation />
        <Payment />
      </div>
    );
  }
}

PurchaseSummary.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default PurchaseSummary;
