import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <section>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ul>
          {categories.map(({ id, name }) => (
            <li
              key={ id }
              data-testid="category"
            >
              {name}
            </li>))}
        </ul>
      </section>
    );
  }
}

export default Home;
