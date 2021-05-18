import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getProductById from '../services/api2';
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
    // const { productInfo: { title, thumbnail, price, attributes } } = this.state;
    const { productInfo } = this.state;
    const { loading } = this.state;
    return (
      <div>
        {loading
          ? <Loading />
          : (
            <>
              <h1 data-testid="product-detail-name">{productInfo.title}</h1>
              <h1>{`R$${productInfo.price}`}</h1>
              <img src={ productInfo.thumbnail } alt="product" width="500px" />
              <ul>
                {productInfo.attributes
                  .map((attribute, index) => (
                    <li key={ index }>
                      {`${attribute.name}:
                   ${attribute.value_name}`}
                    </li>))}
              </ul>
              <Link to={ { pathname: '/shopping-cart', search: '?sort=name', state: { productInfo } } }>Adicionar ao Carrinho</Link>
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
};
