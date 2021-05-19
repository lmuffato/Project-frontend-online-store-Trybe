import React, { Component } from 'react';
import { string } from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, available_quantity: avq, attributes } = product;
    console.log(product);
    // const {
    //   location: { state: { product: {
    //     thumbnail,
    //     title,
    //     price,
    //     available_quantity: avq,
    //     attributes,
    //   } } } } = this.props;
    const realPrice = `${(new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL' })
      .format(price))}`;
    return (
      <div className="productDetails">
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-O.webp` } alt={ title } />
        <h4 data-testid="product-detail-name">{ title }</h4>
        <h4>{ `quantidade disponivel: ${avq}` }</h4>
        <h4>{ realPrice }</h4>
        <ul>
          { attributes.map((attribute) => (
            <li key={ attribute.id }>
              { `${attribute.name}: ${attribute.value_name}` }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: string,
}.isRequired;
export default ProductDetails;
