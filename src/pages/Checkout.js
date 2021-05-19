import React, { Component } from 'react';
import Form from '../components/Form';

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      clientInfo: {
        fullname: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
        paymentMethod: '',
      },
    };

    this.getProducts = this.getProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleChange({ target }) {
    const { clientInfo } = this.state;
    const { name, value } = target;

    clientInfo[name] = value;

    this.setState({
      clientInfo,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { clientInfo } = this.state;
    const isFormFiled = Object.values(clientInfo).every((info) => info !== '');
    const { products } = this.state;

    if (isFormFiled && products.length > 1) {
      alert('Compra realizada com sucesso');
    }
  }

  getProducts() {
    const { location: { products } } = this.props;
    if (products) {
      const totalPrice = products.map(({ price, quantity }) => price * quantity)
        .reduce((acc, crr) => acc + crr);

      this.setState({
        products,
        totalPrice,
      });
    }
  }

  render() {
    const { products, totalPrice, clientInfo } = this.state;
    return (
      <div>
        <h1>Checkout</h1>
        {
          products.map((product) => (
            <div key={ product.id }>
              <h1 data-testid="shopping-cart-product-name">
                {product.title}
              </h1>
              <img src={ product.thumbnail } alt="product" />
              <h2>
                {product.price}
              </h2>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
            </div>
          ))
        }

        <span>
          <p>Preço total</p>
          <p>{totalPrice}</p>
        </span>

        <Form
          clientInfo={ clientInfo }
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}
