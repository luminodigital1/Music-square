import React from 'react';
import './SupportedCompanies.css';
import solana from '../Images/solana.png';
import binance from '../Images/binance.png';
import gate from '../Images/gate.png'

const SupportedCompanies = () => {

  return (
    // <div style={{textAlign: 'center', justifyContent: 'center', marginTop: 150}}>
    //     <h2 style={{fontWeight: 'bold'}}>Companies that trust and support us</h2>
    //     <p style={{marginLeft: 300, marginRight: 300}}>At Music Square, we take immense pride in our strong partnerships
    //          with renowned companies. <br/>
    //          Their unwavering trust and support are a testament to the 
    //          revolutionary power of our blockchain-powered musician freelance marketplace.</p>
    //     <div className='supported-companies'>
    //       <div className='company'>
    //       <img className='company-icon'
    //         src = {solana}
    //           alt="solana"
    //         />
    //         <p className='company-box'></p>
    //       </div>
    //       <div className='company'>
    //       <img className='company-icon'
    //         src = {binance}
    //           alt="binance"
    //         />
    //         <p className='company-box'></p>
    //       </div>
    //       <div className='company'>
    //       <img className='company-icon'
    //         src = {gate}
    //           alt="gate"
    //         />
    //         <p className='company-box'></p>
    //       </div>
    //     </div>
    // </div>

    <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 style={{fontFamily: 'GilroyBold'}}>Companies that trust and support us</h2>
            <p style={{fontFamily: 'GilroyLight'}}>At Music Square, we take immense pride in our strong partnerships
              with renowned companies. <br/>
              Their unwavering trust and support are a testament to the 
              revolutionary power of our <br/>
              blockchain-powered musician freelance marketplace.</p>
          </div>
        </div>

        <div className="d-flex mt-2">
        <div className="company mr-3 pr-5">
           <img className='company-icon'
            src = {solana}
              alt="solana"
            />
            <p className='company-box'></p>
          </div>
          <div className="company mr-3">
           <img className='company-icon'
            src = {binance}
              alt="binance"
            />
            <p className='company-box'></p>
          </div>
          <div className="company">
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