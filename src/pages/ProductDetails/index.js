import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../components/Rating';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      location: { state: { id, title, price, attributes, imagePath } },
    } = this.props;
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
        <Rating productId={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      attributes: PropTypes.arrayOf(PropTypes.object),
      imagePath: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
