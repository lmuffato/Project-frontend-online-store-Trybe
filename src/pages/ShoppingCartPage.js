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
    this.fetchProduct();
  }

  fetchProduct = () => {
    const { location: { state: { data, newCartItemId } } } = this.props;
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
        availableQuantity: relativeProduct.available_quantity,
      };
      return cartProduct;
    });
    this.setState({ carts: produtosFiltrados });
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
