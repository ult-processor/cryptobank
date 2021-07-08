import React from 'react';

const Btc_ngn_order = (props) => {
  const { btc_ngn_order } = props;
  if (!btc_ngn_order || btc_ngn_order.length === -1) return <p>No Order, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Instant Buy/Sell Order</h2>
   
      {btc_ngn_order}
    </ul>
  );
};
export default Btc_ngn_order;

