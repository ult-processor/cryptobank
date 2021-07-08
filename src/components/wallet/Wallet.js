import React from 'react';

const Wallet = (props) => {
  const { ngn_balance } = props;
  if (!ngn_balance || ngn_balance.length === 0) return <p>No Data, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available NGN balance</h2>
      {ngn_balance.map((ngn_balances) => {
        return (
          <li>
            <span>{ngn_balances} </span>
            
          </li>
        );
      })}
    </ul>
  );
};
export default Wallet;

