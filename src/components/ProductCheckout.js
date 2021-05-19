import React, { Component } from 'react'

export default class ProductCheckout extends Component {

  constructor(){
    super();
    this.getItemsFromLocalStore = this.getItemsFromLocalStore.bind(this);
  }

  totalPrice(){
    let totalPrice = 0;
    JSON.parse(localStorage.getItem('cartItems'))
      .forEach((item) => {
        totalPrice += item.price * item.qtd
      })
      return totalPrice;
  }

  getItemsFromLocalStore() {
    // let totalPrice = 0;
    const itemsFromLocalStore = JSON.parse(localStorage.getItem('cartItems'))    
    .map((item) => {
      return <div>
        <img src={item.thumbnail} alt="Product Image"/>
        <div>Item: {item.title}</div>
        <div>Quantidade: {item.qtd}</div>
        <div>Preço: {item.price*item.qtd}</div>
        <hr></hr>
      </div>
    });
    return itemsFromLocalStore;
  }

  render() {
    return (
      <section>
        <div>
          <h1>
          Resumo de Compras:
        </h1>
        <h3>Revise seus produtos</h3>
        <hr></hr>
        {this.getItemsFromLocalStore()}
        <hr></hr>
        <strong>Preço Total: { this.totalPrice() }</strong>
        <hr></hr>
        </div>
        <div>Informacoes do Comprador</div>
        <form>
          <input type="text" placeholder="Nome Completo" data-testid="checkout-fullname"/>
          <input type="text" placeholder="CPF" data-testid="checkout-email"/>
          <input type="email" placeholder="Email" data-testid="checkout-cpf"/>
          <input type="text" placeholder="Telefone" data-testid="checkout-phone"/>
          <input type="text" placeholder="CEP" data-testid="checkout-cep"/>
          <input type="text" placeholder="Endereço" data-testid="checkout-address"/>
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select name="estado"> 
            <option value="estado">Selecione o Estado</option> 
            <option value="ac">Acre</option> 
            <option value="al">Alagoas</option> 
            <option value="am">Amazonas</option> 
            <option value="ap">Amapá</option> 
            <option value="ba">Bahia</option> 
            <option value="ce">Ceará</option> 
            <option value="df">Distrito Federal</option> 
            <option value="es">Espírito Santo</option> 
            <option value="go">Goiás</option> 
            <option value="ma">Maranhão</option> 
            <option value="mt">Mato Grosso</option> 
            <option value="ms">Mato Grosso do Sul</option> 
            <option value="mg">Minas Gerais</option> 
            <option value="pa">Pará</option> 
            <option value="pb">Paraíba</option> 
            <option value="pr">Paraná</option> 
            <option value="pe">Pernambuco</option> 
            <option value="pi">Piauí</option> 
            <option value="rj">Rio de Janeiro</option> 
            <option value="rn">Rio Grande do Norte</option> 
            <option value="ro">Rondônia</option> 
            <option value="rs">Rio Grande do Sul</option> 
            <option value="rr">Roraima</option> 
            <option value="sc">Santa Catarina</option> 
            <option value="se">Sergipe</option> 
            <option value="sp">São Paulo</option> 
            <option value="to">Tocantins</option> 
          </select>
        </form>
        <br></br>
        <h2>Método de Pagamento:</h2>
        <label>
          <input type="radio" name="paymentMethod" />
          Boleto
        </label>
        <div>
          <p>Cartão de Crédito</p>
          <label>
            <input type="radio" name="paymentMethod" />
            VISA
          </label>
          <label>
            <input type="radio" name="paymentMethod" />
            MasterCard
          </label>
          <label>
            <input type="radio" name="paymentMethod" />
            Elo
          </label>
        </div>
        <button type="submit">Comprar</button>
      </section>
    )
  }
}
