import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Checkout extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //   };
  // }

  // componentDidMount() {
  //   this.addItems();
  // }

  // addItems = () => {
  //   const { items } = this.props;
  //   this.setState((previousState) => ({
  //     products: [...previousState.products, ...items],
  //   }));
  // }

  render() {
    const { cartList } = this.props;
    // console.log(products);
    // if (products.length < 1) {
    //   return (
    //     <div>
    //       <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
    //     </div>
    //   );
    // }

    return (
      <div>
        { cartList.map((product, index) => (
          <div key={ `${product.id}_${index}` }>
            <h2 data-testid="shopping-cart-product-name">{product.title}</h2>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {`Quantidade: ${product.quant}`}
            </p>
          </div>
        ))}
        <Form />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartList: PropTypes.object,
}.isRequired;

export default Checkout;
