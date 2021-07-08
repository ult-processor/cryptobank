import React from 'react';

const Btc_balance = (props) => {
  const { btc_balance } = props;
  if (!btc_balance || btc_balance.length === 0) return <p>No Data, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available BTC balance</h2>
      <a href="#"><h5>Withdraw Bitcoin</h5></a>
      {btc_balance.map((btc_balances) => {
        return (
          <li>   
            <span>{btc_balances}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Btc_balance;

