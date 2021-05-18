// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  testarComponente = ({ target }) => {
    console.log(target);
    const { productsInCart } = this.props;
    console.log(productsInCart);
  }

  showProductsInCart = () => {
    const { productsInCart } = this.props;
    console.log(productsInCart);
    const emptyMessage = 'Seu carrinho está vazio';
    const dataTestid = 'shopping-cart-empty-message';
    let showProductsInCartFunc = '';
    if (productsInCart.length === 0) {
      showProductsInCartFunc = (
        <span data-testid={ dataTestid }>
          <p>{ emptyMessage }</p>
        </span>
      );
    } else {
      showProductsInCartFunc = productsInCart
        .map(({ product, productQuantity }) => (
          <div key={ product }>
            {console.log(product)}
            <div data-testid="shopping-cart-product-name">{product}</div>
            <div data-testid="shopping-cart-product-quantity">{productQuantity}</div>
          </div>));
    }
    return (
      <section className="productListContainer">
        {showProductsInCartFunc}
      </section>
    );
  }

  render() {
    return (
      <section>
        {this.showProductsInCart()}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default ShoppingCart;
