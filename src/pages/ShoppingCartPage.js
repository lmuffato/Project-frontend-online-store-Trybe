import React from 'react';
import PropTypes from 'prop-types';
import CartEmpty from '../components/CartEmpty';
import ShoppingCartList from '../components/shoppingCartList';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      carts: [],
    };
  }

  componentDidMount() {
    const shopCart = localStorage.getItem('ShopCartList');
    if (shopCart !== null) {
      this.loadCart();
    }
    this.fetchProduct();
  }

  loadCart = () => {
    const loadedCart = JSON.parse(localStorage.getItem('ShopCartList'));
    const { carts } = this.state;
    carts.push(...loadedCart);
    this.setState({ carts });
  }

  fetchProduct = () => {
    const { location: { state: { data, newCartItemId } } } = this.props;
    if (newCartItemId.length > 0) {
      const { carts } = this.state;
      const produtosFiltrados = newCartItemId.map((item) => {
        const { q, id } = item;
        const { results } = data;
        const relativeProduct = results.filter((el) => el.id === id).shift();
        const { title, thumbnail, price } = relativeProduct;
        const cartProduct = {
          title,
          image: thumbnail,
          price,
          id,
          quantity: q,
        };
        return cartProduct;
      });
      carts.push(...produtosFiltrados);
      this.setState({ carts });
      localStorage.setItem('ShopCartList', JSON.stringify(carts));
    }
  }

  render() {
    const { carts } = this.state;
    return (carts.length !== 0 ? <ShoppingCartList carts={ carts } /> : <CartEmpty />);
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape(),
      newCartItemId: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}.isRequired;

export default ShoppingCartPage;
