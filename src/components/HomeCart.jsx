import React from 'react';
import PropTypes from 'prop-types';

class HomeCart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      counter: 1,
    };
    this.productsCart = this.productsCart.bind(this);
  }

  handleProducts = () => {
    const { location: { state: { product } } } = this.props;
    this.setState((prevState) => ({
      products: [...prevState.products] + [product],
    }));
  }

  productsCart() {
    const { products, counter } = this.state;
    if (products.length === 0) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      products.map((product) => (
        <div key={ product.id }>
          <img src={ product.thumbnail } alt={ product.id } />
          <h6 data-testid="shopping-cart-product-name">{product.title}</h6>
          <p>{` R$ ${product.price} `}</p>
          <button data-testid="shopping-cart-product-quantity" type="button">
            { counter }
          </button>
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        { this.productsCart() }
      </div>
    );
  }
}

HomeCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomeCart;
