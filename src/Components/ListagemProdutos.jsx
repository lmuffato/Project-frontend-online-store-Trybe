import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ListagemProdutos extends Component {
  constructor(){
    super();

    this.state = {
      products: [],
      isLoading: false,
      query: '',
    };
  }

  fetchAPI = (query) => {
    this.setState(
      { isLoading: true },
      async () => {
        const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
          .then((data) => data.json());
          console.log(products)
        console.log(products)
        this.setState({
          isLoading: false,
          products
        });
      });
  }

  handleChangeInput = ({target}) => {
    this.setState({
      query: target.value,
    });
  }

  render() {
    const { products, isLoading, query } = this.state;

    if (isLoading) {
      return(
        <p>Carregando...</p>
      );
    }
    
    return (
      <div>
        <label htmlFor="query-input">
          <input 
            data-testid="query-input"
            type="text"
            onChange={(e) => this.handleChangeInput(e)}
          />
        </label>
        <button query-button="query-button" onClick={this.fetchAPI(query)}>
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        {/* { products === [] ? (<p>Nenhum produto foi encontrado</p>) : products.map((product) => 
          <ProductCard 
            title={title}
            price={price}
            imagaPath={imagePath}
          />
          )} */}
      </div>
    );
  }
}

export default ListagemProdutos;
