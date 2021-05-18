import React from 'react';
import BuyerInformation from './Home/components/BuyerInformation';
import PurchaseSummary from './Home/components/PurchaseSummary';
import Payment from './Home/components/Payment';

class FinalizingPurchase extends React.Component {
  render() {
    return (
      <div>
        <form>
          <PurchaseSummary />
          <BuyerInformation />
          <Payment />
          <butto type="submit">Comprar</butto>
        </form>
      </div>
    );
  }
}

export default FinalizingPurchase;
