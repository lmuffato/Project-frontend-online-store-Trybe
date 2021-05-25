import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './IconStar';

// referencia: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role#aria_attributes_used
// https://pt.stackoverflow.com/questions/194840/como-e-onde-funciona-o-tabindex
// https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex?hl=pt-br
function Icon(props) {
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
    <div
      className="cursor-pointer"
      onMouseEnter={ () => onMouseEnter(index) }
      onMouseLeave={ () => onMouseLeave() }
      onClick={ () => onSaveRating(index) }
      onKeyUp={ () => onSaveRating(index) }
      role="radio"
      aria-checked="mixed"
      tabIndex="0"
    >
      <StarIcon fill={ fill } />
    </div>
  );
}

Icon.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSaveRating: PropTypes.func.isRequired,
};

export default Icon;
