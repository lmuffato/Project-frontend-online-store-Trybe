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
    return (
      <div className="side-bar-category">
        <ul>
          {categoriesList.map((category) => (
            <li data-testid="category" key={ category.id }>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { loading } = this.state;
    return <div>{loading ? 'loading..' : this.sideBar()}</div>;
  }
}

SideBarCategory.propTypes = {
  props: PropTypes.shape({
    categories: PropTypes.objectOf(PropTypes.string),
  }),
}.isRequired;
