import React from 'react';
import PropTypes from 'prop-types';
import freteGratisImg from '../img/freteGratisImg.png';

class FreeShoping extends React.Component {
  render() {
    let renderShipping;
    const imgshipping = (<img
      data-testid="free-shipping"
      src={ freteGratisImg }
      width="100px"
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

FreeShoping.propTypes = {
  shippingFree: PropTypes.string.isRequired,
};

export default FreeShoping;
