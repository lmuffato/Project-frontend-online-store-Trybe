import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CategoryButton from './CategoryButton';

export default class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesApi = this.categoriesApi.bind(this);
    this.categoriesApi().then();
  }

  async categoriesApi() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <section>
        {categories.map((category) => (<CategoryButton
          key={ category.id }
          category={ category }
          handleChange={ handleChange }
        />))}
      </section>
    );
  }
}

SideBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
