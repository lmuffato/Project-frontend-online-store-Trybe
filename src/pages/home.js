import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import SideBarCategory from '../components/SideBarCategory';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './styles/home.css';

class home extends Component {
  constructor() {
    super();
    this.state = {
      query: 'QUERY',
      category: 'CATEGORY_ID',
      data: [],
    };
  }

  getQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  getCategory = (e) => {
    e.preventDefault();
    const nodeInfo = [...Object.values(e.target.parentNode)].shift();
    this.setState({ category: nodeInfo.key });
  }

  getProducts = async (e) => {
    e.preventDefault(e);
    const { query, category } = this.state;
    const apiData = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ data: apiData });
    console.log(apiData);
  }

  render() {
    return (
      <main className="home">
        <SideBarCategory
          categories={ getCategories() }
          getCategory={ this.getCategory }
        />
        <SearchBar getQuery={ this.getQuery } getProducts={ this.getProducts } />
      </main>
    );
  }
}

home.propTypes = {
  getProducts: PropTypes.func.isRequired,
}.isRequired;

export default home;
