import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    getCategories().then((result) => this.setState({
      categories: result,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          { categories
            .map(({ id, name }) => <li key={ id } data-testid="category">{ name }</li>) }
        </ul>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Cart
        </Link>
      </div>
    );
  }
}
