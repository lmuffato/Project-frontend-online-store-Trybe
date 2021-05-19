import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCards from '../../components/ShoppingCards';

class CarrinhoDeCompras extends React.Component {
  constructor() {
    super()
    this.selectedProducts = this.selectedProducts.bind(this)
    this.state = {
      loading: true,
      selected: [],
    }
  }

  componentDidMount() {
    const selected = JSON.parse(localStorage.getItem('shoppingcart'));
    this.selectedProducts(selected);
  }

  selectedProducts(param) {
    this.setState({
      loading: false,
      selected: param,
    });
  }

  render() {
    const { selected, loading } = this.state
    console.log(selected)
    if (loading) return (<p>Carregando...</p>)
    return (
      <div>
        <h1>Página Carrinho de Compras</h1>
        {
          selected.map(({ id, title, price, thumbnail }) =>
            <ShoppingCards
              key={ id }
              id={ id }
              title={ title }
              price={ price }
              imagePath={ thumbnail }
            />
          )
        }
        <Link data-testid="shopping-cart-button" type="button" to="/">Voltar</Link>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
