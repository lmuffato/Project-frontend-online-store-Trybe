import React from 'react';
import { getCategories } from '../services/api';

class ListCategories extends React.Component {
  constructor() {
    super();
    this.fetchCategories = this.fetchCategories.bind(this);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    this.fetchCategories(await getCategories());
  }

  fetchCategories(param) {
    this.setState({
      categories: param,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {
            categories
              .map((category, index) => (
                <li data-testid="category" key={ index }>{ category.name }</li>))
          }
        </ul>
      </div>
    );
  }
}

export default ListCategories;
