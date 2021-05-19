import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import getProductById from '../services/api2';
import LinkToCart from '../components/LinkToCart';
import Loading from '../components/Loading';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: '',
      loading: true,
    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id: productId } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const product = await getProductById(productId);
        this.setState({
          productInfo: product,
          loading: false,
        });
      },
    );
  }

  render() {
    const { productInfo: { title, thumbnail, price, attributes } } = this.state;
    const { loading } = this.state;
    const { addToCart, quantity } = this.props;
    return (
      <div>
        {loading
          ? <Loading />
          : (
            <>
              <h1 data-testid="product-detail-name">{title}</h1>
              <h1>{`R$${price}`}</h1>
              <img src={ thumbnail } alt="product" width="500px" />
              <ul>
                {attributes
                  .map((attribute, index) => (
                    <li key={ index }>
                      {`${attribute.name}:
                   ${attribute.value_name}`}
                    </li>))}
              </ul>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                // data-testid="shopping-cart-button"
                onClick={ () => addToCart({ title, thumbnail, price, attributes }) }
              >
                Adicionar ao Carrinho
              </button>
              {/* <Link to="/shopping-cart">Carrinho de Compras</Link> */}
              <LinkToCart
                quantity={ quantity }
              />
            </>
          )}
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
