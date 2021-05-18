import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon';

/**
 * Código feito com a ajuda desse artigo
 * https://javascript.plainenglish.io/how-to-build-a-star-rating-component-in-react-dad06b05679b
 */

function RatingStar(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow';
    } if (!hoverRating && rating >= index) {
      return 'yellow';
    }
    return 'none';
  }, [rating, hoverRating, index]);

  return (
    <span
      className="rating-component"
      onMouseEnter={ () => onMouseEnter(index) }
      onMouseLeave={ () => onMouseLeave() }
      onClick={ () => onSaveRating(index) }
      onKeyUp={ () => onMouseEnter }
      role="menuitem"
      tabIndex="0"
    >
      <StarIcon fill={ fill } />
    </span>
  );
}

RatingStar.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSaveRating: PropTypes.func.isRequired,
};

export default RatingStar;
