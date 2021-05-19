// implement AddMovie component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartIcon from './ShoppinCart/cartIcon.png';
import SearchProduct from '../components/SearchProducts';
import CategoriesBar from '../components/CategoriesBar';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }

  handle = (category) => {
    this.setState({ category });
  };

  render() {
    const { handle, productsInCart } = this.props;
    const { category } = this.state;
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            placeholder="Pesquisar produto..."
            data-testid="text-input"
            type="text"
            name="searchProduct"
          />
        </label>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          <div className="cartIconContainer">
            <img
              alt="shopping-cart"
              className="shopping-cart-img"
              src={ cartIcon }
            />
            <h2
              className="cartINumberItens"
              data-testid="shopping-cart-size"
            >
              {productsInCart.length}
            </h2>
          </div>
        </Link>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <SearchProduct
            category={ category }
            handle={ handle }
          />
        </div>
        <CategoriesBar handle={ this.handle } />
      </div>
    );
  }
}

ProductList.propTypes = {
  handle: PropTypes.func.isRequired,
  productsInCart: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default ProductList;
