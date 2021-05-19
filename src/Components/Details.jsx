import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Details extends Component {
  constructor() {
    super();

    this.state = {
      productQuantity: 0,
    }
  }

  handleQuantity = () => {
    this.setState((prevState) => ({
      productQuantity: prevState.productQuantity + 1,
    }));
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { productDetail } = state;
    const { title, id, price, thumbnail, condition } = productDetail;
    const { productQuantity } = this.state;
    return (
      <div>
        <img src={ thumbnail } alt="imagem do produto" />
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Identificação:
          {id}
        </p>
        <p>
          Preço:
          {price}
        </p>
        <p>
          Condição atual do Produto:
          {condition}
        </p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          value={ title }
          onClick={ this.handleQuantity }
        >
          Adicionar ao carrinho
        </button>
        <Link 
          to={{
            pathname: "/cart",
            hash: '',
            search: '',
            state: {
              addedProduct: productDetail,
              quantityAdded: productQuantity
            }
          }}
          data-testid="shopping-cart-button"
        >
          <button type="button">Cart</button>
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Details;
