import React from 'react';
import ProductList from './ProductList';
import * as api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      productList: [],
      loading: false,
      isClicked: false,
    };
    this.handleList = this.handleList.bind(this);
  }

 valueInput = ({ target }) => {
   this.setState({
     input: target.value,
   });
 }

 handleList = async () => {
   const { input } = this.state;
   this.setState({ loading: true }, async () => {
     const { results } = await api.getProductsFromCategoryAndQuery('all', input);
     this.setState({
       productList: results,
       loading: false,
       isClicked: true,
     });
   });
 }

 render() {
   const { productList, loading, isClicked } = this.state;
   if (loading) return (<p>Carregando...</p>);
   return (
     <div>
       <input
         data-testid="query-input"
         type="text"
         onChange={ (e) => this.valueInput(e) }
       />
       <button data-testid="query-button" type="button" onClick={ this.handleList }>
         Pesquisar
       </button>
       <p data-testid="home-initial-message">
         Digite algum termo de pesquisa ou escolha uma categoria.
       </p>
       <ProductList products={ productList } isClicked={ isClicked } />
     </div>
   );
 }
}

export default SearchBar;
