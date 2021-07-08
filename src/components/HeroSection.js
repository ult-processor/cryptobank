import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  
  return (
    <div className='hero-container'>
      <h1>GO Crypto!</h1>
      <br></br>
      <br></br>
      <h3> A seamless and secure full-reserve investment bank built on decentralised encrypted ledgers. 
From Fiat to Bitcoin to CryptoBank.</h3>

      
      {/* <video src='./videos/video-1.mp4' autoPlay loop muted /> */}
     
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
           GET STARTED
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH HOW TO? <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
