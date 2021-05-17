import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SideBarCategory.css';

export default class SideBarCategory extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.awaitResponse();
  }

  awaitResponse = async () => {
    const { categories } = this.props;
    const data = await categories;
    this.setState({ categoriesList: data, loading: false });
  };

  sideBar = () => {
    const { categoriesList } = this.state;
    const { getCategory } = this.props;
    return (
      <ul>
        {categoriesList.map((category) => (
          <li key={ category.id }>
            <a
              href={ category.id }
              onClick={ getCategory }
              data-testid="category"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="side-bar-category">
        {loading ? 'loading..' : this.sideBar()}
      </div>
    );
  }
}

SideBarCategory.propTypes = {
  props: PropTypes.shape({
    categories: PropTypes.objectOf(PropTypes.string),
  }),
}.isRequired;
