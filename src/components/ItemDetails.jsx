import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ItemDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {},
      itemInfo: [],
    };
  }

  componentDidMount() {
    this.solveAsync();
  }

  solveAsync = async () => {
    const { match: { params: { itemId, query } } } = this.props;
    const data = await getProductsFromCategoryAndQuery(false, query);
    const arrayResults = data.results;
    this.getItemInfo(arrayResults, itemId);
  }

  getItemInfo = (array, itemId) => {
    const item = array.find((itemObj) => itemObj.id === itemId);
    const techInfo = item.attributes;
    this.setState({
      item,
      itemInfo: techInfo,
    });
  }

  render() {
    const { item: { title, price, thumbnail }, itemInfo } = this.state;
    return (
      <>
        <h1 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h1>
        <img src={ thumbnail } alt={ title } />
        <div>
          <ul>
            {itemInfo.map(({ value_name: value, name, id }) => (
              <li key={ id }>
                { `${name} : ${value}`}
              </li>))}
          </ul>
        </div>
      </>
    );
  }
}

ItemDetails.propTypes = {
  itemId: PropTypes.string,
}.isRequired;

export default ItemDetails;
