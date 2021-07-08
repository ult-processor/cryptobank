import React, { useEffect, useState } from 'react';
import Btc_balance from '../wallet/Btc_balance';
import WithBtc_balanceLoading from '../wallet/WithBtc_balanceLoading';

function Btc_dashboard_balance() {
  const WalletLoading = WithBtc_balanceLoading(Btc_balance);
  const [appState, setAppState] = useState({
    loading: false,
    btc_balance: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = '/wallet/btc/';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((btc_balance) => {
        setAppState({ loading: false, btc_balance: btc_balance });
      });
  }, [setAppState]);
  return (
    <div className=''>
      <div className='container'>
        <h1>My BTC balance</h1>
      </div>
      <div className=''>
        <WalletLoading isLoading={appState.loading} btc_balance={appState.btc_balance} />
      </div>

    </div>
  );
}
export default Btc_dashboard_balance;