import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api2 from '../services/api2';
import CartAmount from '../components/CartAmount';
import Evaluation from '../components/Evaluation';
import CartButton from '../components/CartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      cart: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
    this.fetchCart();
  }

  componentDidUpdate() {
    const { cart } = this.state;
    api2.saveCartLocalStorage(cart);
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api2.getProductsFromId(id);

    this.setState({ product });
  }

  fetchCart = () => {
    const cart = api2.readCartLocalStorage();
    if (cart) this.setState({ cart });
  }

  handleAddClick = () => {
    const { product, cart } = this.state;

    if (cart) { this.setState({ cart: [...cart, product] }); }
  }

  render() {
    const { product: { title, thumbnail, price, attributes, id }, cart } = this.state;
    return (
      <div>
        <CartButton cartSize={ cart.length } />

        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <h2>{price}</h2>
        <ul>
          {attributes && attributes.map((attribute, index) => {
            if (attribute.value_name) {
              return (
                <li key={ index }>
                  {`${attribute.name}:${attribute.value_name}`}
                </li>
              );
            }
            return <div key={ index } />;
          })}
        </ul>
        <CartAmount
          key={ id }
          id={ id }
          quantity={ 2 }
          title={ title }
        />
        <button
          id={ id }
          type="button"
          onClick={ this.handleAddClick }
          data-testid="product-detail-add-to-cart"
        >
          add
        </button>
        <Evaluation />
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
