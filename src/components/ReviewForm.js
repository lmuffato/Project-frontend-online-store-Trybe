import React from 'react';

class ReviewForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          data-testid="product-detail-evaluation"
        />
      </form>
    );
  }
}

export default ReviewForm;
