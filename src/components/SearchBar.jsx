import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import CartButton from './CartButton';
import './styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      query: [],
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleClick = async (categoryId, query) => {
    const data = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ query: data });
  };

  cardsElements = () => {
    const { query } = this.state;
    const { results } = query;
    return results.map((item) => (
      <Card
        title={ item.title }
        image={ item.thumbnail }
        price={ item.price }
        key={ item.id }
      />
    ));
  };

  render() {
    const { text, query } = this.state;
    const { results } = query;

    return (
      <div className="search-bar-container">
        <header className="search-bar">
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ text }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => this.handleClick(text) }
          >
            Search
          </button>
          <CartButton />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
        <section className="products-container">
          {results === undefined ? null : this.cardsElements()}
        </section>
      </div>
    );
  }
}

export default SearchBar;
