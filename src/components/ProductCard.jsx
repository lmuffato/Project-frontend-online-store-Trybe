import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';

export default class ProductCard extends Component {
/*   constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  } */

  /* async handleClick(category, query) {
    const response = await API
      .getProductsFromCategoryAndQuery(category, query);
    console.log(response.results);
    this.setState({ products: response.results });
  } */

  render() {
    const { title, price, img, id, productSelected } = this.props;
    const detailsLink = `/details/${id}/${productSelected.category_id}`;
    return (
      <div>
        <Link to={ detailsLink } data-testid="product-detail-link">
          <div data-testid="product">
            <h2>{title}</h2>
            <img src={ img } alt={ title } />
            <p>{price}</p>
          </div>
        </Link>
        <ButtonAdd
          /* handleClick={ handleClick } */
          productSelected={ productSelected }

        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  productSelected: PropTypes.object,
}.isRequired;
