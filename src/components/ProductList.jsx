import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    if (products === 'none') return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        { products.map(({ title, price, thumbnail, id }) => (
          <div data-testid="product" key={ id }>
            <h1>{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <span>{ price }</span>
            <Link
              data-testid="product-detail-link"
              to={ `/produto/${id}` }
            >
              Saiba mais
            </Link>
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
