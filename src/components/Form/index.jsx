import React from 'react';
import Input from '../Input';
import data from './data';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      formInfos: {
        fullName: '',
        email:'',
        cpf: null,
        phone: null,
        cep: null,
        adress: '',
        adressNum: 0,
        comp: null,
      },
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { formInfos } = this.state;
    return (
      <div>
        <h1>Informações do Comprador</h1>
        <form>
          {data.map(({ type, dataId, maxLength, className, name, placeHolder }) => (
            <Input
              key={ name }
              type={ type }
              dataId={ dataId }
              maxLength={ maxLength }
              className={ className }
              name={ name }
              placeHolder={ placeHolder }
              onChange={ this.handleChange }
              value={ formInfos[name] }
            />
          ))}
        </form>
      </div>
    );
  }
}

export default Form;
