import React, { Component } from 'react';
import { getProductById } from '../services/api';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: '',
      /*  attributes: [], */
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
        console.log(product);
        this.setState({
          productInfo: product,
          loading: false,
        });
      },
    );
  }

  render() {
    const { productInfo: { title, thumbnail, price, id, attributes } } = this.state;
    const { loading } = this.state;
    const { loadingElement } = <span>Loading...</span>;

    return (
      <div>
        {loading
          ? loadingElement
          : (
            <>
              <h1 data-testid="product-detail-name">{title}</h1>
              <h1>{`R$${price}`}</h1>
              <img src={ thumbnail } alt="product" width="500px" />
              <ul>
                {attributes
                  .map((attribute) => (
                    <li key={ id }>
                      {`${attribute.name}:
                   ${attribute.value_name}`}
                    </li>))}
              </ul>
            </>
          )}
      </div>
    );
  }
}
