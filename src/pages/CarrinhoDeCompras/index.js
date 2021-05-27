import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCards from '../../components/ShoppingCards';
import * as api from '../../services/api';

class CarrinhoDeCompras extends React.Component {
  constructor() {
    super();
    this.selectedProducts = this.selectedProducts.bind(this);
    this.infoRender = this.infoRender.bind(this);
    this.changeQtd = this.changeQtd.bind(this);
    this.state = {
      loading: true,
      selected: [],
    };
  }

  componentDidMount() {
    this.infoRender();
  }

  infoRender() {
    const productInfo = JSON.parse(localStorage.getItem('shoppingcart'));
    if (productInfo === null) {
      return;
    }
    productInfo.forEach(async (item) => {
      const { category, query, id } = item;
      const qtdItems = productInfo.filter((i) => i.id === id).length;
      const productSearch = await api.getProductsFromCategoryAndQuery(category, query);
      const selected = Object.values(productSearch)[3]
        .filter((product) => product.id === id);
      const { selected: selectedItems } = this.state;
      if (selectedItems.filter((i) => i.id === id).length === 0) {
        this.selectedProducts(selected, qtdItems);
      }
    });
  }

  selectedProducts(param, qtd) {
    this.setState({
      loading: true,
    }, () => {
      this.setState((prevState) => {
        param[0].qtd = qtd;
        return {
          selected: [...prevState.selected, param[0]],
          loading: false,
        };
      });
    });
  }

  changeQtd(e, id) {
    const { value } = e.target;
    const { selected } = this.state;
    const item = selected.findIndex((i) => i.id === id);
    const data = [...selected];
    if (parseInt(value, 10) === 1) {
      data[item].qtd += 1;
      this.setState({
        selected: [...data],
      });
    } else {
      data[item].qtd -= 1;
      if (data[item].qtd < 0) data[item].qtd = 0;
      this.setState({
        selected: [...data],
      });
    }
  }

  RenderFunction() {
    const { selected, loading } = this.state;
    if (selected.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    } if (loading) {
      return (<p>Carregando</p>);
    }
    return (
      selected.map(({ id, title, price, thumbnail, qtd }) => (
        <ShoppingCards
          key={ id }
          id={ id }
          title={ title }
          price={ price }
          imagePath={ thumbnail }
          qtd={ { qtd, changeQtd: this.changeQtd } }
        />
      ))
    );
  }

  render() {
    return (
      <div>
        <h1>Página Carrinho de Compras</h1>
        {this.RenderFunction()}
        <Link data-testid="shopping-cart-button" type="button" to="/">Voltar </Link>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
