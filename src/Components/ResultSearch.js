import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';

class ResultSearch extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="products-cards">
        { productList.map((product) => <Cards key={ product.id } product={ product } />)}
      </div>
    );
  }
}

ResultSearch.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default ResultSearch;
