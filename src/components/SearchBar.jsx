import React from 'react';
import * as apiUrl from '../services/api';
import Categories from './Categories';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      status: false,
      products: [],
    };
    this.eventFilter = this.eventFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.handleFilter();
  }

  async handleFilter() {
    const { filter, status } = this.state;
    const { getQuery } = await apiUrl;
    if (status === true) {
      const result = await getQuery(filter);
      this.setState({
        products: result.results,
        filter: '',
      });
    }
  }

  eventFilter(event) {
    const seach = event.target.value;
    if (seach.length !== 0) {
      this.setState({
        filter: seach,
        status: true,
      });
    } else {
      this.setState({
        status: false,
      });
    }
  }

  render() {
    return (
      <div>
        <input type="search" data-testid="query-input" onChange={ this.eventFilter } />
        <button type="button" data-testid="query-button" onClick={ this.handleFilter }>
          Search
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories />
      </div>
    );
  }
}

export default SearchBar;
