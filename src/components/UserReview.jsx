import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mensagem: '',
      rating: 0,
      // reviewList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    // this.renderReviews = this.renderReviews.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    // console.log(value);
    this.setState({ [name]: value });
  }

  // renderReviews() {
  //   const { reviewList } = this.state;
  //   return (
  //     <div>
  //       <h3>Comentários</h3>
  //       {reviewList.map((review) => (
  //         <div key={ review.id }>
  //           <h4>{ review.title }</h4>
  //           <p>{ review.content }</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  render() {
    const { email, mensagem, rating } = this.state;

    return (
      <>
        <form>
          <input
            value={ email }
            type="text"
            placeholder="Digite seu email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={ rating }
            name="rating"
            onChange={ this.handleChange }
            // data-testid="rating-input"
          />
          <textarea
            type="text"
            placeholder="mensagem(Opcional)"
            name="mensagem"
            cols="100"
            rows="10"
            value={ mensagem }
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button type="submit"> Avaliar</button>
        </form>
        {/* {!listOfReviews.length ? <h3>Sem Comentários</h3> : this.renderReviews()} */}
      </>
    );
  }
}
