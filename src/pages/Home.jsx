import React from 'react';
import * as api from '../services/api';
import Mensagem from '../components/Mensagem';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';
import * as api2 from '../services/api2';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: null,
      search: '',
      cart: [],
      categorySelected: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchCart();
  }

  componentDidUpdate() {
    const { cart } = this.state;
    api2.saveCartLocalStorage(cart);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clickButtonSearch = async () => {
    const { search, categorySelected } = this.state;
    const searchResult = await api
      .getProductsFromCategoryAndQuery(search, categorySelected);
    this.setState({
      // searchResult,
      products: searchResult.results,
    });
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  fetchCart = () => {
    const cart = api2.readCartLocalStorage();
    if (cart) this.setState({ cart });
  }

  handleCategory = ({ target }) => {
    const value = target.type === 'radio' ? target.id : target.value;
    this.setState({ categorySelected: value });
  }

  handleCategoryClick = async (search, categoryId) => {
    const result = await api
      .getProductsFromCategoryAndQuery(search, categoryId);
    if (result) this.setState({ products: result.results });
  }

  handleAddClick = ({ target }) => {
    const { id } = target;
    const { products, cart } = this.state;
    const product = products.find((item) => item.id === id);
    if (cart) { this.setState({ cart: [...cart, product] }); }
  }

  render() {
    const { categories, products, search } = this.state;
    return (
      <div>
        <Mensagem />
        <input
          type="text"
          name="search"
          placeholder="buscar"
          data-testid="query-input"
          onChange={ this.handleChange }
          autoComplete="off"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.clickButtonSearch }
        >
          Search
        </button>
        <label htmlFor="categoryFilter">
          { categories
          && categories.map((category) => (
            <CategoryFilter
              key={ category.id }
              category={ category }
              handleCategory={ this.handleCategory }
              onClick={ () => this.handleCategoryClick(search, category.id) }
            />
          ))}
        </label>
        { products
          && products.map((product) => (
            <Card
              product={ product }
              key={ product.id }
              onClick={ this.handleAddClick }
            />))}
      </div>
    );
  }
}
export default Home;
