import React from 'react';
import PropTypes from 'prop-types';
import BuyerInformation from './BuyerInformation';
import Payment from './Payment';

class PurchaseSummary extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      totalPrice: {},
    };
  }

  // componentDidMount() {
  //   this.TotalPrice();
  // }

  TotalPrice() {
  //   // console.log(this.props);
  //   const { location } = this.props;
  //   this.setState = {
  //     totalPrice: location.state.total,
  }

  render() {
    const { cart } = this.props;
    if (!cart) return <h1>Loading...</h1>;

    return (
      <div>
        <h1>Revise seus produtos</h1>
        {
          cart.length === 0
            ? <h1 data-testid="shopping-cart-empty-message2">Seu carrinho está vazio</h1>
            : (
              <ul>
                {
                  cart.map((product) => (
                    <li key={ product.data.id }>
                      <h5 data-testid="shopping-cart-product-name2">
                        {product.data.title}
                      </h5>
                      <h5 data-testid="shopping-cart-product-quantity2">
                        {product.quantity}
                      </h5>
                      {/* <h5>{product.data.price}</h5> */}
                      <h5>
                        { product.quantity * product.data.price }
                      </h5>
                    </li>
                  ))
                }
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
