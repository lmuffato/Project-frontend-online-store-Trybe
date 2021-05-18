import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { onClick } = this.props;
    return (
      categories.map((category) => (
        <label
          htmlFor="categoryInput"
          key={ category.id }
        >
          {category.name}
          <input
            data-testid="category"
            id="categoryInput"
            name="category"
            type="radio"
            onClick={ () => onClick(category.id) }
          />
        </label>
      ))
    );
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

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
