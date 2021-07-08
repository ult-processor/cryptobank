import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from '../images//withdrawal.jpg'; 

function Cards() {
  return (
    
    <div className='cards'>
      <br/>
      <br/>
      <br/>
      <br/>
      

      <h1>OUR FEATURES</h1>
      
      <div className='cards__container'>
        <br/>
        <br/>
        <p> Our Investment Management Services help you pursue your 
              financial needs as they grow and change
        </p>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='INVESTMENT AND TRADING'
              label='This offers a variety of benefits to boost our sales 
              and suit our investors choice of portfolio'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='SAFTEY'
              label='Our systems authentication, cold storage, smart backup, 
              and manual withdrawals all ensure your funds remain safe and secure.'
              path='/services'
            />
                        <CardItem
              src='images/img-2.jpg'
              text='BITCOIN EXCHANGE'
              label='Our Investment Management Services help you pursue your 
              financial needs as they grow and change.'
              path='/services'
            />
          </ul>
          <br/>
          <br/>
          <br/>
     
          <hr></hr>
          <br/>
          <br/>
          <br/>
          
          <h1>Getting started...</h1>
          <br/>
          <br/>
          <br/>
          
          <h3><i><u>Creating a CryptoBank Account</u></i></h3>
          <br></br>
          <br></br>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Fill in your details'
              label='step1'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Verify your account'
              label='Step 2'
              path='/dashboard'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Getting ready'
              label='step 3'
              path='/sign-up'
            />
            </ul>
            <br></br>
            <br></br>
            <h4><u>Deposit bitcoin to your CryptoBank wallet</u></h4>
            <br></br>
           
     
            <ul className='cards__items'>
            <CardItem
              src='images/screensht-1.jpg'
              text='Send btc to your cryptobank wallet address'
              label='step1'
              path='/services'
            />
            <CardItem
              src='images/screensht-3.jpg'
              text='or buy bitcoin from us'
              label='Step 2'
              path='/dashboard'
            />
            <CardItem
              src='images/screensht-2.jpg'
              text='Get ready to Invest'
              label='step 3'
              path='/sign-up'
              />
              </ul>
             
              <br></br>
              <br></br>
              <h4><u>Investing your bitcoin</u></h4>
              <br></br>
              <ul className='cards__items'>
             
            <CardItem
              src='images/screensht-2.jpg'
              text='Click on Invest on your dashboard'
              label='step1'
              path='/services'
            />
            <CardItem
              src='images/screensht-1.jpg'
              text='Set Amount and package'
              label='Step 2'
              path='/dashboard'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Get ready to Gain'
              label='step 3'
              path='/sign-up'
              />
              </ul>

              <br></br>
              <br></br>
              <h4><u>Withdraw your bitcoin/fiat</u></h4>
              <br></br>
              <ul className='sigleimage'>
        <img src={img} width="80%" height="200px" alt="CryptoBank " />
        </ul>
        <br></br>
              <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='you can withdraw your bitcoin or withdrawl directly to bank account '
              label='step1'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='fill your bank details/wallet address'
              label='Step 2'
              path='/dashboard'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Recieve your earnings'
              label='step 3'
              path='/sign-up'
              />
               
          </ul>
          
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
