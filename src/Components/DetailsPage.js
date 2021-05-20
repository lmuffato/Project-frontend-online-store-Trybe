import React from 'react';
import PropTypes from 'prop-types';

class DetailsPage extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const [title, price, thumbnail] = state;
    return (
      <div data-testid="product-detail-name">
        <p>{title}</p>
        <p>{price}</p>
        <img style={ { width: '100px' } } src={ thumbnail } alt="imagem" />
      </div>
    );
  }
}
DetailsPage.propTypes = {
  location: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default DetailsPage;
