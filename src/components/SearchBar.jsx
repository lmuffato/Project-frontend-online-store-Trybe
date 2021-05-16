import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      query: [],
    };
  }

  handleTitle =(event) => {
    this.setState({ text: event.target.value });
  };

  handleClick = async (categoryId, query) => {
    const data = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ query: data });
  };

  cardsElements = () => {
    const { query } = this.state;
    const { results } = query;
    return results.map((item) => (
      <Card
        title={ item.title }
        image={ item.thumbnail }
        price={ item.price }
        key={ item.id }
      />
    ));
  };

   handleClick = async () => {
     const { text } = this.state;
     getProductsFromCategoryAndQuery(text);
   }

   render() {
     const { text } = this.state;
     return (
       <header>
         <input
           type="text"
           data-testid="query-input"
           onChange={ this.handleTitle }
           value={ text }
         />
         <button
           type="button"
           data-testid="query-button"
           onClick={ this.handleClick }
         >
           Search
         </button>
         <h2 data-testid="home-initial-message">
           Digite algum termo de pesquisa ou escolha uma categoria.
         </h2>
       </header>
     );
   }
}

export default SearchBar;
