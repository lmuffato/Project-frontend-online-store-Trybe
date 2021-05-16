import React from 'react';
import FilterCategory from '../components/FilterCategory';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <FilterCategory />
      </div>
    );
  }
}
