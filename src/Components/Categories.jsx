import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      didMount: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categorias = await getCategories();
    this.setState({ categories: categorias, didMount: true });
  }

  render() {
    const { categories, didMount } = this.state;

    if (didMount === false) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <div>
        <ul>
          {categories
            .map((cat) => <li data-testid="category" key={ cat.id }>{cat.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Categories;
