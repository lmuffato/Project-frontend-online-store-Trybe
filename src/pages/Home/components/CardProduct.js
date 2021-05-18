import React from 'react';
import PropTypes from 'prop-types';
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
    const productFound = products.find((product) => product.id === target.id);
    const updatedCart = [...cart, productFound];
    const updatedQuantityOfProduct = { [productFound.id]: 1 };
    setCart(updatedCart, updatedQuantityOfProduct);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.length === 0 ? <NotFound />
          : products.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
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
