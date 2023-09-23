import React from 'react';
import './AboutArtistBuyer.css';
import ht1 from '../Images/ht1.png';
import ht2 from '../Images/ht2.png';
import ht3 from '../Images/ht3.png';
import './HireToday.css'

const HireToday = () => {

    const handleClick = () => {
        
      }

  return (
    <div className="p-5 mt-5">
      <div className="container d-flex">
        <div className="row col-md-6">
          <div className="col-md-10">
          <h2 style={{fontFamily:'GilroyBold', marginTop:50}}>Hire Today</h2>
          <p className="fs-5 " style={{color: '#ffe500', fontFamily:'GilroyBold', marginBottom: 0}}>Unlock Musical Brilliance
          </p>
          <br/>
          <p className="fs-8 pr-5" style={{fontFamily:'GilroyLight', marginBottom: 0}}>
            Transform Your Melodies: Book the Best Musicians Today and Create Timeless Masterpieces.</p>
            <br/>
            <button className="read-more-btn" onClick={handleClick} type='submit'> Read more</button>
            </div>
        </div>

        <div className="col-md-7">
          <div className="">
            <div className="d-flex">
                <div className='cropped-image-container'>
                    <img className="cropped-image"
                        src = {ht1}
                        alt="ht1"
                        />
                  </div>
                  <div className='cropped-image-container' style={{marginTop:150}}>
                    <img className="cropped-image-2"
                        src = {ht2}
                        alt="ht1"
                        />
                  </div>
                  <div className='cropped-image-container'>
                    <img className="cropped-image"
                        src = {ht3}
                        alt="ht1"
                        />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireToday;