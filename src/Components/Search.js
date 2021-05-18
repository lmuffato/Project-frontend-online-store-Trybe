import React from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      productList: []
    }
    this.handleText = this.handleText.bind(this);
  }
 
  componentDidMount() {
    api.getCategories()
  }

  handleText({target}) {
    const {value} = target
    this.setState({text: value})
  }

  handleClick = async () => {
    const query = await api.getProductsFromCategoryAndQuery('fadsfas', this.state.text)
    this.setState({ productList: query})
  }
  render() {

  // const { products } = this.props

    return (
      <div>
        <input type="text" data-testid = 'query-input' onChange = {this.handleText}/>
        <button type = 'submit' data-testid = 'query-button' onClick = { this.handleClick} > Buscar </button>
        <div>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </h1>
          <ProductCard productList = {}/>
        </div>
      </div>
    );
  }
}

export default Search;
