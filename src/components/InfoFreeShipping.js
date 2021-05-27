import React from 'react';

function components(props) {
  const { shipping } = props;
  return (
    <div>
      { shipping && <div data-testid="free-shipping">Free Shipping</div> }
    </div>
  );
}

export default components;
