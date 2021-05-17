import React, { Component } from 'react';
import { getCategories } from '../../services/api';
import Loading from '../../Loading';
import './Categories.css';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const results = await getCategories();
    this.setState({ categories: results, loading: false });
  }

  categories(categories) {
    return categories.map((category) => (
      <label
        data-testid="category"
        htmlFor="categoryInput"
        key={ category.id }
      >
        {category.name}
        <input id="categoryInput" type="checkbox" />
      </label>
    ));
  }

  render() {
    const { categories, loading } = this.state;
    return (
      <section className="container">
        <nav className="content">
          { loading ? <Loading />
            : this.categories(categories)}
        </nav>
      </section>
    );
  }
}

export default Categories;
