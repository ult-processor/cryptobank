import React from 'react';
 import HomeSections from '../../HomeSections';

import '../../../App.css';
// import Cards from '../../Cards';
import HeroSection from '../../HeroSection';
// import Footer from '../../Footer';

 import  { homeObjOne, homeObjTwo, homeObjThree, } 
from './Data';
// import Pricing from '../../Pricing';

function Home() {
  return (
    <>
     <HeroSection /> 
       {/* <Cards /> */}
      <HomeSections {...homeObjOne} />
      <HomeSections {...homeObjTwo} /> 
      <HomeSections {...homeObjThree} />
      {/* <HomeSections {...homeObjFour} /> */}
     {/* <Pricing /> */}
     
    </>
  );
}

export default Home;
