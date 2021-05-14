import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Loading from './Loading';

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      categories: undefined,
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id } data-testid="category">{categorie.name}</li>))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
