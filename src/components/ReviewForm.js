import React from 'react';
import reactDomTestUtilsProductionMin from 'react-dom/cjs/react-dom-test-utils.production.min';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      review: '',
    };
  }

  handleChange(event) {
    this.setState({
      review: event.target.value,
    });
  }

  render() {
    const { review } = this.state;
    return (
      <form>
        <textarea
          type="text"
          data-testid="product-detail-evaluation"
          value={ review }
          placeholder="Avaliação"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default ReviewForm;
