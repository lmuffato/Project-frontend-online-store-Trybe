// Criação do componente
import React from 'react';
import { Link } from 'react-router-dom';
import { addToLocalStorage, checkStorage } from '../services/localStorage';
import CartCard from '../components/CartCard';
import backArrow from '../imagens/backArrow.svg';
import '../styles/ShoppingCart.css';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      array: false,
      storageData: '',
    };
  }

  componentDidMount() {
    this.mountComponent();
  }

  refreshState = (newArray) => {
    this.setState({ storageData: newArray });
  }

  deleteProduct = (id) => {
    this.mountComponent();
    const { storageData } = this.state;
    const newArray = storageData
      .filter((item) => id !== item.title);
      // console.log('TO FILTRANDO AINDA, CALMA AI');
    console.log(newArray);
    this.refreshState(newArray);
    // this.setState({ storageData: newArray });
    addToLocalStorage(newArray);
    // const storageReturn = await this.mountComponent();
    // Não está atualizando o storageData no momento da deleção, ele só atualiza depois da próxima mudança de estado, pq?
    console.log(storageData);
  }

  mountComponent = () => {
    const storageReturn = checkStorage();
    if (storageReturn.length > 0) {
      this.setState({
        storageData: storageReturn,
        array: true,
      });
    }
    console.log(this.state);
    return storageReturn;
  }

  render() {
    const { storageData, array } = this.state;
    if (array === false) {
      return (
        <div>
          <Link
            to="/"
            className="backArrow"
          >
            <img
              src={ backArrow }
              alt="Seta de voltar"
              className="backArrow-image"
            />
          </Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div className="product-cart">
        <div className="shopping-cart-heading">
          <Link
            to="/"
            className="backArrow"
          >
            <img
              src={ backArrow }
              alt="Seta de voltar"
              className="backArrow-image"
            />
          </Link>
          <p
            className="shopping-cart-product-quantity"
          >
            {/* Para o requisito 13 é melhor pegar o length do
            localStorage e juntar ele com o carrinho */}
            { 'Quantidade de items no carrinho: ' }
            {storageData.length}
          </p>
        </div>
        <div className="shopping-cart-container">
          {
            storageData.map((item) => (
              <CartCard
                product={ item }
                key={ item.title }
                deleteProduct={ this.deleteProduct }
              />
            ))
          }
        </div>
      </div>
    );
  }
}
