// Criação do componente
import React from 'react';
import { Link } from 'react-router-dom';
import { getAll, addToLocalStorage } from '../services/localStorage';
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
    this.checkStorage();
    // this.deleteProduct();
  }

  quantityProduct = ({ target }) => {
    const { storageData } = this.state;
    storageData.map((product) => {
      if (target.name === 'add' && product.buyQuantity <= product.availableQuantity) {
        console.log('Me adicionaram aqui ó');
        product.buyQuantity += 1;
        product.price = product.standardPrice * parseInt(product.buyQuantity, 10);
        this.setState({
        });
        return addToLocalStorage(product);
      }
      if (target.name === 'sub' && product.buyQuantity > 1) {
        product.buyQuantity -= 1;
        product.price = product.standardPrice * parseInt(product.buyQuantity, 10);
        this.setState({
        });
        return addToLocalStorage(product);
      }
      return addToLocalStorage(product);
    });
  };

  deleteProduct = ({ target }) => {
    this.checkStorage();
    const { storageData } = this.state;
    const products = getAll();
    console.log(target.previousSibling.previousSibling);
    console.log(products);
    const newArray = storageData
      .filter((item) => target.previousSibling.previousSibling.id !== item.title);
    this.setState({ storageData: newArray });
    addToLocalStorage(newArray);
  }

  checkStorage = () => {
    const storage = getAll();
    console.log(storage);
    if (Array.isArray(storage)) {
      return this.setState({
        storageData: storage,
        array: true,
      });
    }
    if (storage !== null) {
      const storageArray = [storage];
      return this.setState({
        storageData: storageArray,
        array: true,
      });
    }
  }

  render() {
    const { storageData, array } = this.state;
    console.log(storageData);
    if (array === false) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
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
