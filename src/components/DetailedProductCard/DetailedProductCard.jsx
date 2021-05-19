import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailedProductCard extends Component {
  render() {
    // Use o log abaixo para verificar todas as informações que podemos usar sobre o produto
    // console.log(Object.entries(this.props));
    const { title, price, thumbnail } = this.props;
    return (
      <section>
        <h2 data-testid="product-detail-name">
          {`${title} - R$ ${price}`}
        </h2>
        <img src={ thumbnail } alt={ `Produto ${title}` } />
      </section>
    );
  }
}

DetailedProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
export default DetailedProductCard;
