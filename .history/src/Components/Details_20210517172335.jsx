import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  myProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const product = await getProductsFromId(id);
    return product;
  }

  render() {
    return (
      <div>
        <Link to="/cart">
          <button type="button">Cart</button>
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Details;
