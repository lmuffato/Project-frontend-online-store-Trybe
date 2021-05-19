import React from 'react';
import PropTypes from 'prop-types';

class HomeCart extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      status: false,
    };
  }

  componentDidMount() {
    this.setStatusTrue();
  }

  renderProducts = () => {
    const { location: { state: { buyList } } } = this.props;
    const { counter } = this.state;
    const renderList = buyList.map((product) => (
      <div key={ product.id }>
        <img src={ product.thumbnail } alt={ product.id } />
        <h6 data-testid="shopping-cart-product-name">{product.title}</h6>
        <p>{` R$ ${product.price} `}</p>
        <button data-testid="shopping-cart-product-quantity" type="button">
          { counter }
        </button>
      </div>));
    return renderList;
  }

  renderEmptyCart = () => (
    <h2 data-testid="shopping-cart-empty-message">
      Seu carrinho está vazio
    </h2>
  )

  setStatusTrue = () => {
    const { location: { state: { buyList } } } = this.props;
    if (buyList.length > 0) {
      this.setState({
        status: true,
      });
    }
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        { status ? this.renderProducts() : this.renderEmptyCart() }
      </div>
    );
  }
}

HomeCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      buyList: PropTypes.shape({
        map: PropTypes.func.isRequired,
        length: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomeCart;
