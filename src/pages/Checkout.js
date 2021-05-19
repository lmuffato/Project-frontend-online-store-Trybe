import React from 'react';
import BuyerInformation from './Home/components/BuyerInformation';
import PurchaseSummary from './Home/components/PurchaseSummary';
import Payment from './Home/components/Payment';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <PurchaseSummary />
          <BuyerInformation />
          <Payment />
          <button type="submit">Comprar</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
