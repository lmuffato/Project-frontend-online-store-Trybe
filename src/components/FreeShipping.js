import React from 'react';
import PropTypes from 'prop-types';
import freteGratisImg from '../img/freteGratisImg.png';

class FreeShipping extends React.Component {
  render() {
    let renderShipping;
    const imgshipping = (<img
      data-testid="free-shipping"
      id="free-shipping"
      className="free-shipping"
      src={ freteGratisImg }
      alt="freteGratisImg"
    />);
    const { shippingFree } = this.props;
    if (shippingFree) {
      renderShipping = imgshipping;
    } else {
      renderShipping = '';
    }

    return (renderShipping);
  }
}

FreeShipping.propTypes = {
  shippingFree: PropTypes.string.isRequired,
};

export default FreeShipping;
