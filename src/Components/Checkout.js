import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h3>Revise seus produtos</h3>
        </section>
        <form action="">
          <section>
            <h3> Informações do Comprador</h3>
            <div>
              <input
                data-testid="checkout-fullname"
                type="text"
                placeholder="Nome Completo"
                required
              />
            </div>
            <div>
              <input
                data-testid="checkout-cpf"
                type="number"
                placeholder="CPF"
                required
              />
            </div>
            <div>
              <input
                data-testid="checkout-email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                data-testid="checkout-phone"
                type="number"
                placeholder="Telefone"
                required
              />
            </div>
            <div>
              <input
                data-testid="checkout-cep"
                type="number"
                placeholder="CEP"
                required
              />
            </div>
            <div>
              <input
                data-testid="checkout-address"
                type="text"
                placeholder="Endereço"
                required
              />
            </div>
            <div>
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="number" placeholder="Número" />
            </div>
            <div>
              <input type="text" placeholder="Cidade" />
            </div>
            <select name="state" id="">
              <option value="">Estado</option>
            </select>
          </section>
          <h3> Método de Pagamento</h3>
          Boleto
          <br />
          <label htmlFor="boleto">
            <input id="boleto" name="pagamento" value="boleto" type="radio" />
          </label>
          <br />
          Cartão de Crédito
          <br />
          <label htmlFor="master">
            MasterCard
            <input id="master" name="pagamento" value="master" type="radio" />
          </label>
          <label htmlFor="visa">
            Visa
            <input id="visa" name="pagamento" value="visa" type="radio" />
          </label>
          <label htmlFor="elo">
            Elo
            <input id="elo" name="pagamento" value="elo" type="radio" />
          </label>
          <button data-testid="checkout-products" type="submit">
            Comprar
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
