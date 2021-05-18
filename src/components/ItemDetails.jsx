import React from 'react';
import PropTypes from 'prop-types';

class ItemDetails extends React.Component {
  render() {
    // const { item: { title, price, thumbnail } } = this.state;
    const { location: { state: { title, price, thumbnail, attributes } } } = this.props;
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
      </div>
    );
  }
}

ItemDetails.propTypes = {
  itemId: PropTypes.string,
}.isRequired;

export default ItemDetails;
