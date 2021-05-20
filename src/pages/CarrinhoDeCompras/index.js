import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCards from '../../components/ShoppingCards';
import * as api from '../../services/api';

class CarrinhoDeCompras extends React.Component {
  constructor() {
    super();
    this.selectedProducts = this.selectedProducts.bind(this);
    this.infoRender = this.infoRender.bind(this);
    this.state = {
      loading: true,
      selected: [],
    };
  }

  componentDidMount() {
    this.infoRender();
  }

  async infoRender() {
    const productInfo = JSON.parse(localStorage.getItem('shoppingcart'));
    if (productInfo === null) {
      return;
    }
    const { category, query, id } = productInfo;
    const productSearch = await api.getProductsFromCategoryAndQuery(category, query);
    const selected = Object.values(productSearch)[3]
      .filter((product) => product.id === id);
    this.selectedProducts(selected);
  }

  selectedProducts(param) {
    this.setState({
      selected: param,
      loading: false,
    });
  }

  render() {
    const { selected, loading } = this.state
    return (
      <div>
        <h1>Página Carrinho de Compras</h1>
        {
          (selected.length === 0)
            ? <p data-testid='shopping-cart-empty-message'>"Seu carrinho está vazio"</p>
            : (loading)
              ? <p>Carregando</p>
              : selected.map(({ id, title, price, thumbnail }) =>
                <ShoppingCards
                  key={ id }
                  id={ id }
                  title={ title} 
                  price={ price }
                  imagePath={ thumbnail }
                />
              )
        }
        <Link data-testid="shopping-cart-button" type="button" to="/">Voltar </Link>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
