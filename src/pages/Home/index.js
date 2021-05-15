import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromQuery } from '../../services/api';
import CardProduct from './components/CardProduct';
import Category from './components/Category';



class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      resultado: [],
      texto: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { texto } = this.state;
    const request = await getProductsFromQuery(texto);
    this.setState({
      resultado: request.results,
    })
  }

  handleChange({target}) {
    this.setState({
      texto: target.value,
    })
  }

  render() {
    const { resultado } = this.state;
    return (
      <>
        <input type="text" data-testid="query-input" onChange={this.handleChange} />

        <button data-testid="query-button" onClick={this.handleClick}>Pesquisa</button>

        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Category />
        <CardProduct products={ resultado } />

      </>
    );
  }
}

export default Home;
