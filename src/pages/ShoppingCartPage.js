import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartEmpty from '../components/CartEmpty';
import ShoppingCartList from '../components/shoppingCartList';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      carts: [],
      newCartProducts: [],
      loadedCarts: false,
    };
  }

  componentDidMount() {
    this.loadCart();
    this.fetchProduct();
  }

  componentDidUpdate() {
    const { loadedCarts } = this.state;
    if (loadedCarts) {
      this.mergeNewCartItems();
    }
  }

  loadCart = () => {
    const loadedCart = JSON.parse(localStorage.getItem('ShopCartList'));
    if (loadedCart !== null) {
      const { carts } = this.state;
      carts.push(...loadedCart);
      this.setState({ carts });
    }
    this.setState({ loadedCarts: true });
  }

  saveCart = () => {
    const { carts } = this.state;
    const cartData = JSON.stringify(carts);
    if (cartData !== '[]') {
      localStorage.setItem('ShopCartList', cartData);
    }
  }

  fetchProduct = () => {
    const { location: { state: { data, newCartItemId } } } = this.props;
    if (newCartItemId.length > 0) {
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
      this.setState({ newCartProducts: produtosFiltrados });
    }
  }

  mergeNewCartItems = () => {
    const { newCartProducts, carts } = this.state;
    newCartProducts.forEach((el) => {
      if (carts.every((item) => item.id !== el.id)) {
        carts.push(el);
      } else {
        const relativeItem = carts.filter((item) => item.id === el.id).shift();
        const index = carts.indexOf(relativeItem);
        relativeItem.quantity += el.quantity;
        carts[index] = relativeItem;
      }
    });
    this.setState({ carts, newCartProducts: [], loadedCarts: false });
    this.saveCart();
  }

  clearShopCart = () => {
    localStorage.removeItem('ShopCartList');
    this.setState({ carts: [] });
  }

  addQ = (e) => {
    const { carts } = this.state;
    const itemData = Object.values(e.target).pop().data;
    itemData.quantity += 1;
    const indexInCart = carts.indexOf(itemData);
    carts[indexInCart] = itemData;
    this.setState({ carts });
    this.saveCart();
  }

  subQ = (e) => {
    let { carts } = this.state;
    const itemData = Object.values(e.target).pop().data;
    const indexInCart = carts.indexOf(itemData);
    console.log(indexInCart);
    if (itemData.quantity >= 2) {
      itemData.quantity -= 1;
      carts[indexInCart] = itemData;
    } else {
      carts = carts.filter((el) => el.id !== itemData.id);
      console.log(carts);
    }
    this.setState({ carts });
    this.saveCart();
  }

  render() {
    const { carts } = this.state;
    return (
      <main>
        <Link to="/"> Home </Link>
        <ShoppingCartList
          carts={ carts }
          add={ this.addQ }
          sub={ this.subQ }
        />
        <button type="button" onClick={ this.clearShopCart }>
          Limpar carrinho
        </button>
      </main>
    );
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
