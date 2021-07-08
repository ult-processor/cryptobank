import React from 'react';

function Btc_ngn_orderLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching btc/ngn order :)
      </p>
    );
  };
}
export default Btc_ngn_orderLoading;