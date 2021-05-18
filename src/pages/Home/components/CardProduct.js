import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound';

class CardProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct({ target }) {
    const { products, setCart } = this.props;
    const { cart } = this.state;
    let addedProduct = {};
    let updatedCart = [];

    const productFound = products.find((product) => product.id === target.id);

    const foundInCart = cart.find((product) => product.data.id === target.id);

    if (foundInCart) {
      const increasedQuantity = foundInCart.quantity + 1;
      addedProduct = {
        ...foundInCart,
        quantity: increasedQuantity,
      };
      updatedCart = cart.map((product) => {
        if (product.data.id === target.id) {
          product = addedProduct;
        }
        return product;
      });
    } else {
      addedProduct = {
        quantity: 1,
        data: productFound,
      };
      updatedCart = [...cart, addedProduct];
    }

    this.setState({
      cart: updatedCart,
    });

    setCart(updatedCart);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.length === 0 ? <NotFound />
          : products.map((product) => (
            <div key={ product.id } data-testid="product">
              <Link
                to={ {
                  pathname: `/product/${product.category_id}/${product.id}`,
                  state: { products },
                } }
                data-testid="product-detail-link"
              >
                <p>{product.title}</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ this.addProduct }
                id={ product.id }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default CardProduct;
