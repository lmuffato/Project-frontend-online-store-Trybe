import React from 'react';
import PropTypes from 'prop-types';
import ItemOfCart from '../components/ItemOfCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalPayment: 0,
    };

    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { product } = location.state;
    console.log(product);
    this.addProductToCart(product);
  }

  addProductToCart(product) {
    const { cart, totalPayment } = this.state;
    const { priceAdd } = product;
    this.setState({
      cart: [...cart, product],
      totalPayment: totalPayment + priceAdd,
    });
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <ol>
        {cart.map((item) => (
          <ItemOfCart key={ item.id } product={ item } />))}
      </ol>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: {
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    },
  }).isRequired,
};

export default ShoppingCart;
