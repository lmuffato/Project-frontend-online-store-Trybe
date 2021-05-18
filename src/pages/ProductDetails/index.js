import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location: { state: { title, price, attributes, imagePath } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        { `R$ ${price}` }
        <img src={ imagePath } alt="Imagem do produto" />
        <div>
          <ul>
            { attributes.map(({ name, value_name: valueName }, index) => (
              <li key={ index }>
                {' '}
                {`${name}: ${valueName}`}
                {' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      attributes: PropTypes.arrayOf(PropTypes.object),
      imagePath: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
