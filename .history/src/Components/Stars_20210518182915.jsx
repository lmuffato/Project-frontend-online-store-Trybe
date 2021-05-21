import React from 'react';
import ReactStars from 'react-stars';

const ratingChanged = (newRating) => {
  console.log(newRating);
};

class Stars extends React.Component {
  render() {
    return (
      <ReactStars
        count={ 5 }
        onChange={ ratingChanged }
        size={ 24 }
        color2="#ffd700"
      />
    );
  }
}

export default Stars;
