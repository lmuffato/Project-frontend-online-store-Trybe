import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardProduct from './components/CardProduct';
import Category from './components/Category';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { onSearch, onFilterByCategory, onFilterByQuery, products } = this.props;
    return (
      <>
        <input type="text" data-testid="query-input" onChange={ onFilterByQuery } />

        <button
          data-testid="query-button"
          onClick={ onSearch }
          type="button"
        >
          Pesquisa
        </button>

        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Category onCategorySelection={ onFilterByCategory } />
        <CardProduct products={ products } />

      </>
    );
  }
}

export default Home;

Home.propTypes = {
  onSearch: PropTypes.func,
}.isRequired;
