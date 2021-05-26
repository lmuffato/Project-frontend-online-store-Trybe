import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './IconStar';

function IconComent(props) {
  const {
    stars,
    rating,
    hoverRating,
  } = props;
  const fill = React.useMemo(() => {
    if (hoverRating >= rating) {
      return 'yellow';
    } if (!hoverRating && rating >= stars) {
      return 'yellow';
    }
    return 'none';
  }, [rating, hoverRating, stars]);
  return (
    <div>
      <StarIcon fill={ fill } />
    </div>
  );
}

IconComent.propTypes = {
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
};

export default IconComent;
