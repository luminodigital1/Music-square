import React from 'react';
import '../Companies/SupportedCompanies.css';
import ceo from '../../../Images/CEO.png';

const VoicesFromPodium = () => {

  return (
    <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <p style={{fontFamily:'GilroyBold', color:'#ffe500'}}>Voices from the Podium</p>
            <h2 style={{fontFamily: 'GilroyBold'}}>Insights from our team and associates</h2>
            <p style={{fontFamily: 'GilroyLight', marginLeft:100,marginRight:100}}>Music Square, led by me as CEO, is a thriving
             musician job marketplace connecting talented musicians and satisfied clients. 
             Valuable user feedback drives continuous improvements, while strategic 
             collaborations expand our reach. We prioritize data security and remain 
             dedicated to growth, innovation, and positive social impact.</p>
             <p style={{fontFamily: 'GilroyLight', marginBottom: 5}}>Sean Kim, CEO StreamiFi</p>
             <img src={ceo} alt=""/>
          </div>
        </div>
      </div>

  );
};

export default VoicesFromPodium;