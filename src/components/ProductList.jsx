import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  render() {
    const { products, isClicked } = this.props;

    if (products.length === 0 && isClicked) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        { products.map(({ title, price, thumbnail }) => (
          <div data-testid="product" key={ title }>
            <h1>{title}</h1>
            <img src={ thumbnail } alt={ title } />
            <span>{price}</span>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  isClicked: PropTypes.bool,
}.isRequired;

export default ProductList;
