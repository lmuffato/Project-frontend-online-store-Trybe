import React from 'react';

class HomeCart extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      status: false,
    }
  }

  componentDidMount() {
    this.setStatusTrue();
  }

  renderProducts = () => {
    const { location: { state: { buyList } } } = this.props;
    const { counter } = this.state
    const renderList = buyList.map((product) =>
      <div key={ product.id }>
        <img src={ product.thumbnail } alt={ product.id } />
        <h6 data-testid="shopping-cart-product-name">{product.title}</h6>
        <p>{` R$ ${product.price} `}</p>
        <button data-testid="shopping-cart-product-quantity" type="button">
          { counter }
        </button>
      </div>
    );
    return renderList;
  }

  renderEmptyCart = () => {
    return (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    )
  }

  setStatusTrue = () => {
    const { status } = this.state;
    const { location: { state: { buyList } } } = this.props;
    if(buyList.length > 0) {
      this.setState({
        status: true,
      });
    }
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        { status ? this.renderProducts() : this.renderEmptyCart() }
      </div>
    );
  }
}

export default HomeCart;
