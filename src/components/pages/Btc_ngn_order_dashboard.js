import React, { useEffect, useState } from 'react';
import Btc_ngn_order from '../wallet/Btc_ngn_order';
import Btc_ngn_orderLoading from '../wallet/Btc_ngn_orderLoading';

function Btc_ngn_order_dashboard() {
  const WalletLoading = Btc_ngn_orderLoading(Btc_ngn_order);
  const [appState, setAppState] = useState({
    loading: false,
    Btc_ngn_order: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = '/wallet/btc-ngn-order/';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((Btc_ngn_order) => {
        setAppState({ loading: false, Btc_ngn_order: Btc_ngn_order });
      });
  }, [setAppState]);
  return (
    <div className=''>
      <div className='container'>
        <h1>BTC/NGN BUY/SELL order </h1>
      </div>
      <div className=''>
        <WalletLoading isLoading={appState.loading} Btc_ngn_order={appState.Btc_ngn_order} />
      </div>

    </div>
  );
}
export default Btc_ngn_order_dashboard;