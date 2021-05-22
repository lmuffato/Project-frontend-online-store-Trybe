import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import ClientInfoForm from '../components/ClientInfoForm';

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
    const { name, value, type } = target;

    clientInfo[name] = value;
    target.style.border = '1px solid black';
    if (type === 'radio') {
      target.parentNode.parentNode.style.border = 'none';
    }

    this.setState({
      clientInfo,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { clientInfo } = this.state;
    const isFormFiled = Object.values(clientInfo).every((info) => info !== '');
    const { products } = this.state;

    if (isFormFiled && products.length >= 1) {
      document.alert('Compra realizada com sucesso');
    } else {
      const inputs = document.querySelectorAll('input');
      const emptyInputs = Array.from(inputs)
        .filter(({ value, checked }) => value === '' || !checked);
      emptyInputs.forEach((input) => {
        input.style.border = '1px solid red';
        if (input.type === 'radio') {
          input.parentNode.parentNode.style.border = '1px solid red';
        }
      });
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
              <h3 data-testid="shopping-cart-product-name">
                {product.title}
              </h3>
              <img width="200" src={ product.thumbnail } alt="product" />
              <p>
                {product.price}
              </p>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
            </div>
          ))
        }

        <span>
          <p>Preço total</p>
          <p>{totalPrice}</p>
        </span>

        <ClientInfoForm
          clientInfo={ clientInfo }
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.objectOf(shape({
    products: PropTypes.arrayOf(PropTypes.object),
  })),
}.isRequired;
