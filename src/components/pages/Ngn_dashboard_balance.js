import React, { useEffect, useState } from 'react';
import Wallet from '../wallet/Wallet';
import withWalletLoading from '../wallet/WithWalletLoading';

function Ngn_dashboard_balance() {
  const WalletLoading = withWalletLoading(Wallet);
  const [appState, setAppState] = useState({
    loading: false,
    ngn_balance: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = '/wallet/ngn/';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((ngn_balance) => {
        setAppState({ loading: false, ngn_balance: ngn_balance });
      });
  }, [setAppState]);
  return (
    <div className=''>
      <div className='container'>
        <h1>My NGN balance</h1>
      </div>
      <div className=''>
        <WalletLoading isLoading={appState.loading} ngn_balance={appState.ngn_balance} />
      </div>

    </div>
  );
}
export default Ngn_dashboard_balance;