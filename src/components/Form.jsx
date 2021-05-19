import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      // email: '',
      // cpf: '',
      // cidade: '',
      // estado: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      nome: target.value,
    });
  }

  render() {
    const { nome } = this.state;
    return (
      <div>
        <form>
          <label>
            Nome:
            <input
              type="text"
              value={ nome }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
