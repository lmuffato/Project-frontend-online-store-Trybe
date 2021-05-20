import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newCartItemId: [],
    };
  }

  addProduct = () => {
    const { location: { state: { product } } } = this.props;
    const { newCartItemId } = this.state;
    let { productInfo } = this.state;
    if (!productInfo) {
      productInfo = {
        id: product.sku,
        q: 1,
      };
      newCartItemId.push(productInfo);
      this.setState({ newCartItemId, productInfo });
    } else {
      productInfo.q += 1;
      newCartItemId[0] = productInfo;
      this.setState({ newCartItemId, productInfo });
    }
  }

  render() {
    const { location: { state: { product, data } } } = this.props;
    const { newCartItemId } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <img src={ product.image } alt={ `Foto do produto ${product.title}` } />
        <h3>{ `R$: ${parseFloat(product.price).toFixed(2)}` }</h3>
        <button type="button" onClick={ this.addProduct }>
          Adicionar Produto ao Carrinho
        </button>
        <Link
          to={ { pathname: '/ShoppingCartPage',
            state: { data, newCartItemId } } }
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
