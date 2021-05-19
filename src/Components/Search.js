import React from 'react';
import * as api from '../services/api';
import ResultSearch from './ResultSearch';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      productList: [],
    };
    this.handleText = this.handleText.bind(this);
  }

  componentDidMount() {
    api.getCategories();
  }

  handleText({ target }) {
    const { value } = target;
    this.setState({ text: value });
  }

  handleClick = async () => {
    const { text } = this.state;
    const query = await api.getProductsFromCategoryAndQuery('teste', text);
    const { results } = query;
    this.setState({ productList: results });
  }

  render() {
    const { productList } = this.state;
    return (

      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleText }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          {' '}
          Buscar
        </button>
        <div>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </h1>
          {productList.length ? <ResultSearch productList={ productList } />
            : <h1>Nenhum produto foi encontrado</h1>}
        </div>
      </div>
    );
  }
}

export default Search;
