import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>
      </div>
    );
  }
}

export default Details;
