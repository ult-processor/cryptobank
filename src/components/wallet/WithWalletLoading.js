import React from 'react';

function WithWalletLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching Wallet :)
      </p>
    );
  };
}
export default WithWalletLoading;