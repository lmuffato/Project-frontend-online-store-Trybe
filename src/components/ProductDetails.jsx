import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyList: [],
    };
  }

  addItem = (event) => {
    const { value } = event.target;
    this.setState((previ) => ({
      buyList: [...previ.buyList, JSON.parse(value)],
    }));
  }

  renderButtonAdd = (item) => (
    <button
      data-testid="product-detail-add-to-cart"
      onClick={ this.addItem }
      value={ item }
      type="button"
    >
      Adicionar ao Carrinho
    </button>
  )

  render() {
    const { buyList } = this.state;
    const { location: { state: { product } } } = this.props;
    return (
      <div>
        <Link
          to={ { pathname: '/cart', state: { buyList } } }
          data-testid="shopping-cart-button"
        >
          <img
            width="30px"
            height="25px"
            src="https://image.flaticon.com/icons/png/512/126/126083.png"
            alt="Icone Cart"
            id="cart-image"
          />
        </Link>
        <img src={ product.thumbnail } alt={ product.id } />
        <h6 data-testid="product-detail-name">{product.title}</h6>
        <p>{` R$ ${product.price} `}</p>
        { this.renderButtonAdd(JSON.stringify(product)) }
      </div>
    );
  }
}

ProductDetails.propTypes = {
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
