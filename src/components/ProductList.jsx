import React from 'react';
// import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      input: '',
    };
  }

  // componentDidMount() {
  //   const { query } = this.props;
  //   console.log(query);
  //   // getProductsFromCategoryAndQuery()
  //   //   .then((response) => response.json())
  //   //   .then((response) => (
  //   //     console.log(response)
  //   //     // this.setState({
  //   //     //   loading: false,
  //   //     //   input: response,
  //   //     // })
  //   //   ));
  // }

  render() {
    const { loading, input } = this.state;

    if (loading) {
      return <p>...Carregando</p>;
    }
    return (
      <main>
        {input}
      </main>
    );
  }
}
