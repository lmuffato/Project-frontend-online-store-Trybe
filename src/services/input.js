import React from 'react';
import ProductCard from './ProductCard';
import * as api from './api';
import AddToCartBtn from '../components/AddToCartBtn';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      products: [],
      loading: false,
    };
  }

    inputValue = ({ target }) => {
      this.setState({
        input: target.value,
      });
    }

    fecthAPI = async () => {
      const { input } = this.state;
      this.setState(
        { loading: true },
        async () => {
          const { results } = await api.getProductsFromCategoryAndQuery(input);
          this.setState({
            products: results,
            loading: false,
          });
        },
      );
    }

    render() {
      const { products, loading } = this.state;
      if (loading) return (<p>Carregando...</p>);
      return (
        <div>
          <label htmlFor="input">
            <input
              type="text"
              id="input"
              data-testid="query-input"
              onChange={ (e) => this.inputValue(e) }
            />
          </label>
          <button data-testid="query-button" type="button" onClick={ this.fecthAPI }>
            Pesquisar
          </button>
          <h3
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>

          {
            products === []
              ? (<p>Nenhum produto foi encontrado</p>)
              : products.map(({ title, price, thumbnail, id, category_id: catId }) => (
                <ProductCard
                  key={ id }
                  id={ id }
                  title={ title }
                  price={ price }
                  imagePath={ thumbnail }
                  button={ <AddToCartBtn
                    category={ catId }
                    query={ title }
                    id={ id }
                    dataid="product-add-to-cart"
                  /> }
                />
              ))
          }

        </div>
      );
    }
}

export default Input;
