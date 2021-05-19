import React from 'react';
import { string } from 'prop-types';
import AddToCart from './AddToCart';

class ProductCard extends React.Component {
  render() {
    const {
      props: { location: { state: { product: {
        thumbnail,
        title,
        price,
        available_quantity: avq,
        attributes,
      } } } } } = this.props;
    const { props: { location: { state: { product } } } } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h4 data-testid="product-detail-name">{ title }</h4>
        <h4>{ `quantidade disponivel: ${avq}` }</h4>
        <h4>{` R$: ${price} `}</h4>
        <ul>
          { attributes.map((attribute) => (
            <li key={ attribute.id }>
              { `${attribute.name}: ${attribute.value_name}` }
            </li>
          )) }
        </ul>
        <AddToCart product={ product } testId="product-detail-add-to-cart" />
      </div>
    );
  }
}

ProductCard.propTypes = {
  thumbnail: string,
}.isRequired;

export default ProductCard;
