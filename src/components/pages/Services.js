import React from 'react';
import './services.css';
import { Button } from '../Button';
// import { Link } from 'react-router-dom';


export default function Services() {
  return <div className='services-container'>
     
  <div className="services-subscription-border">
 <section className='services-subscription'>
  
   <p className='services-subscription-heading'>
     Join our newsletter to receive our best deals
   </p>
   <p className='services-subscription-text'>
     You can unsubscribe at any time.
   </p>
   <div className='input-areas'>
     <form>
       <input
         className='footer-input'
         name='email'
         type='email'
         placeholder='Your Email'
       />
       <Button buttonStyle='btn--outline'>Subscribe</Button>
     </form>
   </div>
 </section>
 </div>
 </div>;

}
