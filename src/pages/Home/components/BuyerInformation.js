import React from 'react';

class BuyerInformation extends React.Component {
  render() {
    return (
      <div>
        <h1>Informações do comprador</h1>
        <form>
          <label htmlFor="FullName">
            <input type="text" />
          </label>

          <label htmlFor="Cep">
            <input type="text" />
          </label>

          <label htmlFor="Complement">
            <input type="text" />
          </label>

          <label htmlFor="CPF">
            <input type="text" />
          </label>

          <label htmlFor="Adress">
            <input type="text" />
          </label>

          <label htmlFor="Number">
            <input type="text" />
          </label>

          <label htmlFor="E-mail">
            <input type="text" />
          </label>

          <label htmlFor="Phone">
            <input type="text" />
          </label>

          <label htmlFor="City">
            <input type="text" />
          </label>

          <label htmlFor="State">
            <select>
              <option value="State">Estado</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default BuyerInformation;
