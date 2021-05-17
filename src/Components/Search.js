import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleText = this.handleText.bind(this);
  }
 
  handleText({target}) {
    const {value} = target
    this.setState({text: value})
  }
  render() {

  const { products } = this.props
  console.log(this.props)

    return (
      <div>
        <input type="text" data-testid = 'query-input' onChange = {this.handleText}/>
        <button type = 'submit' data-testid = 'query-button' onClick = { products(this.state.text) } > Buscar </button>
        <div>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </h1>
        </div>
      </div>
    );
  }
}

export default Search;
