import React from 'react';
import { Link } from 'react-router-dom';
import * as api2 from '../services/api2';
import CartAmount from '../components/CartAmount';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: api2.readCartLocalStorage(),
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart = () => {
    // utilizando exemplo de reduce fornecido em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const { products } = this.state;

    if (products) {
      const quantidadeProdutos = products.reduce((acc, obj) => {
        if (!obj) return;
        const key = obj.id;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
      this.setState({ cart: Object.values(quantidadeProdutos) });
    }
  }

  handleQuantityChange = () => {
    // Escrever aqui a funcao para ajustar o cart de acordo com a quantidade de produtos que retornar do estado de cada componente
    // do CartAmount e setar novamente o localStorage
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Link to="/"> home </Link>
        <h1 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h1>
        {cart && cart.map((item) => (
          <CartAmount
            key={ item[0].id }
            id={ item[0].id }
            quantity={ item.length }
            title={ item[0].title }
          />))}
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/checkout',
            state: cart,
          } }
        >
          Comprar
        </Link>
      </div>
    );
  }
}

export default Cart;
