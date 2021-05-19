import React from 'react';
import { Link } from 'react-router-dom';
import ListCategories from '../../components/ListCategories';
import Input from '../../services/input';
import ProductsByCategory from '../ProductsByCategory';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      categorySelected: '',
    };

    this.setCategorySelected = this.setCategorySelected.bind(this);
    this.setCategories = this.setCategories.bind(this);
  }

  setCategories(value) {
    this.setState({
      categories: value,
    });
  }

  async setCategorySelected(value) {
    this.setState({
      categories: [],
      categorySelected: value,
    });
  }

  render() {
    const { categories, categorySelected } = this.state;
    return (
      <div>
        <h1>Página Inicial</h1>
        <Input />
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho-de-compras"
        >
          Carrinho de compras

        </Link>
        <aside>
          <ListCategories
            categories={ categories }
            setCategorySelected={ this.setCategorySelected }
            setCategories={ this.setCategories }
          />
        </aside>
        <main>
          { categorySelected && <ProductsByCategory id={ categorySelected } /> }
        </main>
      </div>
    );
  }
}

export default Main;
