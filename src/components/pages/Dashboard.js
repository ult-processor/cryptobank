import React from 'react';

import Ngn_dashboard_balance from './Ngn_dashboard_balance';
import Btc_dashboard_balance from './Btc_dashboard_balance'
import Pricing from '../Pricing';

function Dashboard() {
  return (
    <>
     <Ngn_dashboard_balance /> 
     <Btc_dashboard_balance />

     <Pricing />
     
    </>
  );
}

export default Dashboard;
