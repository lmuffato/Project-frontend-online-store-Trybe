import React from 'react';
import CategoryList from '../components/CategoryList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FrontPage from '../components/FrontPage';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: undefined,
      checkbox: '',
      // checked: false,
      items: [],
      loading: false,
    };
  }

  request = () => {
    this.setState({
      loading: true,
    });
    const { input, checkbox } = this.state;
    getProductsFromCategoryAndQuery(checkbox, input)
      .then((finalData) => {
        this.setState({
          loading: false,
          items: finalData.results,
        });
      });
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  }

  handleChangeCheckbox = async ({ target }) => {
    await this.setState(() => ({
      checkbox: target.value,
    }));
    this.request();
  }

  handleArrayItems = (items) => {
    if (items.length > 0) {
      return true;
    }
    return false;
  }

  render() {
    const { loading, items } = this.state;
    return (
      <main>
        <div className="content-container">
          <FrontPage
            request={ this.request }
            handleChangeInput={ this.handleChangeInput }
            items={ items }
            loading={ loading }
          />
          <CategoryList
            className="product-list"
            handleChange={ this.handleChangeCheckbox }
          />
        </div>
      </main>
    );
  }
}
