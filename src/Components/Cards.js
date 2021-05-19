import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData() {
    this.setState({
      product: 
    })
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div className="products-cards">
        <Link onClick={ this.handleData } to={ `/detailsPage/${id}` }>
          <div data-testid="product">
            <p>{title}</p>
            <p>{price}</p>
            <img style={ { width: '100px' } } src={ thumbnail } alt="imagem" />
          </div>
        </Link>
      </div>
    );
  }
}
Cards.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default Cards;
