import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      payment: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { fullname, email, cpf, phone, cep, address, payment } = this.state;
    const { location } = this.props;
    const { state } = location;
    const [title, thumbnail, price, qnt] = state;

    return (
      <div>
        <section>
          <h3>Revise seus produtos</h3>
          <img src={ thumbnail } alt="imagem" />
          {' '}
          Título:
          {title}
          <br />

          <p data-testid="shopping-cart-product-quantity">
            {' '}
            Quantidade:
            {qnt}
          </p>
          <p>
            {' '}
            Preço:
            {price}
          </p>
        </section>
        <form>
          <section>
            <h3> Informações do Comprador</h3>
            <div>
              <input
                data-testid="checkout-fullname"
                type="text"
                placeholder="Nome Completo"
                name="fullname"
                value={ fullname }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <input
                data-testid="checkout-email"
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <input
                data-testid="checkout-cpf"
                type="text"
                placeholder="CPF"
                name="cpf"
                value={ cpf }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <input
                data-testid="checkout-phone"
                type="text"
                placeholder="Telefone"
                name="phone"
                value={ phone }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <input
                data-testid="checkout-cep"
                type="text"
                placeholder="CEP"
                name="cep"
                value={ cep }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <input
                data-testid="checkout-address"
                type="text"
                placeholder="Endereço"
                name="address"
                value={ address }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <input type="number" placeholder="Número" />
            </div>
          </section>
          <h3> Método de Pagamento</h3>
          Boleto
          <br />
          <label htmlFor="boleto">
            <input
              id="boleto"
              name="payment"
              value={ payment }
              type="checkbox"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          Cartão de Crédito
          <br />
          <label htmlFor="master">
            MasterCard
            <input
              id="master"
              name="payment"
              value={ payment }
              type="checkbox"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="visa">
            Visa
            <input
              id="visa"
              name="payment"
              value={ payment }
              type="checkbox"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="elo">
            Elo
            <input
              id="elo"
              name="payment"
              value={ payment }
              type="checkbox"
              onChange={ this.handleChange }
            />
          </label>
          <button
            onClick={ this.handleSubmit }
            data-testid="checkout-products"
            type="submit"
          >
            Comprar
          </button>
        </form>
      </div>
    );
  }
}
Checkout.propTypes = {
  location: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default Checkout;
