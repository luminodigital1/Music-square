import React from 'react';
import './SupportedCompanies.css';
import solana from '../Images/solana.png';
import binance from '../Images/binance.png';
import gate from '../Images/gate.png'

const SupportedCompanies = () => {

  return (
    <div style={{textAlign: 'center', justifyContent: 'center', marginTop: 150}}>
        <h2 style={{fontWeight: 'bold'}}>Companies that trust and support us</h2>
        <p style={{marginLeft: 300, marginRight: 300}}>At Music Square, we take immense pride in our strong partnerships
             with renowned companies. <br/>
             Their unwavering trust and support are a testament to the 
             revolutionary power of our blockchain-powered musician freelance marketplace.</p>
        <div className='supported-companies'>
          <div className='company'>
          <img className='company-icon'
            src = {solana}
              alt="solana"
            />
            <p className='company-box'></p>
          </div>
          <div className='company'>
          <img className='company-icon'
            src = {binance}
              alt="binance"
            />
            <p className='company-box'></p>
          </div>
          <div className='company'>
          <img className='company-icon'
            src = {gate}
              alt="gate"
            />
            <p className='company-box'></p>
          </div>
        </div>
    </div>
  );
};

export default SupportedCompanies;