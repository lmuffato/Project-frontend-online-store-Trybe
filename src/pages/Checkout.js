import React from 'react';
import BuyerInformation from './Home/components/BuyerInformation';
import PurchaseSummary from './Home/components/PurchaseSummary';
import Payment from './Home/components/Payment';

class Checkout extends React.Component {
  // locail() {
  //   console.log(location);
  // }

  render() {
    const { location } = this.props;
    console.log(location);
    return (
      <div>
        { location }
        <form>
          <PurchaseSummary test={ location } />
          <BuyerInformation />
          <Payment />
          <button type="submit">Comprar</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
