import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location:
      { state: { title, price, thumbnail, attributes } }, func } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>{` R$ ${price} `}</h2>
        <img src={ thumbnail } alt={ title } />
        <div>
          <ul>
            {attributes.map(({ value_name: value, name, id }) => (
              <li key={ id }>
                { `${name} : ${value}`}
              </li>))}
          </ul>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => func({ title, price, thumbnail, id: '' }) }
        >
          Adionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}.isRequired;

export default ProductDetails;
