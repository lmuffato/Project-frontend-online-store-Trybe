import React from 'react';
import BuyerInformation from './Home/components/BuyerInformation';
import PurchaseSummary from './Home/components/PurchaseSummary';
import Payment from './Home/components/Payment';

class Checkout extends React.Component {
  // locail() {
  //   console.log(location);
  // }

  render() {
    return (
      <div>
        <form>
          <PurchaseSummary />
          <BuyerInformation />
          <Payment />
        </form>
      </div>
    );
  }
}

export default Checkout;
