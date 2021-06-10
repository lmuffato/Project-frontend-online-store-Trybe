import React from 'react';
import { Link } from 'react-router-dom';
import * as api2 from '../services/api2';
import CartAmount from '../components/CartAmount';
import CartButton from '../components/CartButton';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: [],
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart = () => {
    // utilizando exemplo de reduce fornecido em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let products = api2.readCartLocalStorage();
    const { cart } = this.state;
    if (products && cart) {
      const quantity = products.reduce((acc, obj) => {
        const key = obj.id;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      products = Object.values(quantity).map((item) => ({
        product: item[0],
        quantity: item.length,
      }));
      // const cartSize = products.reduce((acc, curr) => acc + curr.quantity, 0);

      this.setState({
        products,
        cartSize: api2.readCartSizeLocalStorage(),
        cart: api2.readCartLocalStorage(),
      });
    }
  }

  // handleQuantityChange = () => {
  //   const { products } = this.state;
  //   const cartSize = products.reduce((acc, curr) => acc + curr.quantity, 0);
  //   this.setState({
  //     cartSize,
  //   });
  // }

  render() {
    const { products, cartSize } = this.state;
    return (
      <div>
        <Link to="/"> home </Link>
        <CartButton cartSize={ cartSize } />

        <h1 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h1>
        {products && products.map((item) => (
          <CartAmount
            key={ item.product.id }
            id={ item.product.id }
            quantity={ item.quantity }
            title={ item.product.title }
            onChange={ this.fetchCart }
            maxQuantity={ item.product.available_quantity }
          />))}
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/checkout',
            state: products,
          } }
        >
          Comprar
        </Link>
      </div>
    );
  }
}

export default Cart;
