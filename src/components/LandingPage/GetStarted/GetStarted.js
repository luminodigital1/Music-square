import React from 'react';
import y1 from '../../../Images/y1.png';
import y2 from '../../../Images/y2.png';
import y3 from '../../../Images/y3.png';
import y4 from '../../../Images/y4.png';
import './GetStarted.css';
import '../AboutArtistBuyer/AboutArtistBuyer.css';

const GetStarted = () => {

  return (
    <div className="container pt-5 getstarted">
        <h2 style={{fontFamily: 'GilroyBold', marginBottom:20}}>How to get started on Music Square</h2>
        <div className="d-flex">
            <div className="col-md-4">
                <div className='img-box'>
                    <img className="" src={y1} alt=""/>
                </div>
                <h4 style={{fontFamily: 'GilroyBold', marginTop: 10}}>Music Square for Musicians</h4>
                <p style={{fontFamily: 'GilroyLight', marginRight:10}}>With Music Square, you can discover and hire 
                top-notch music talent, manage payments, contracts, and projects, and work the way
                 you want.</p>
                 {/* <button className="read-more-btn" type='submit'> Read more</button> */}
            </div>

            <div className="col-md-4">
                <div className='img-box'>
                    <img className="" src={y2} alt=""/>
                </div>
                <h4 style={{fontFamily: 'GilroyBold', marginTop: 10}}>Music Square for Clients</h4>
                <p style={{fontFamily: 'GilroyLight', marginRight:10}}>With Music Square, you can 
                discover and hire top-notch music talent, 
                manage payments, contracts, and projects, and work the way you want.</p>
                 {/* <button className="read-more-btn" type='submit'> Read more</button> */}
            </div>

            <div className="col-md-4">
                <div className='img-box'>
                    <img className="" src={y3} alt=""/>
                </div>
                <h4 style={{fontFamily: 'GilroyBold', marginTop: 10}}>How to hire on Music Square</h4>
                <p style={{fontFamily: 'GilroyLight', marginRight:10}}>There are three ways to hire on Music 
                Square— we’ll go through all three of these in this article and when to use each one!</p>
                 {/* <button className="read-more-btn" type='submit'> Read more</button> */}
            </div>

            {/* <div className="col-md-4">
                <div className='img-box'>
                    <img className="" src={y4} alt=""/>
                </div>
                <h4 style={{fontFamily: 'GilroyBold', marginTop: 10}}>Top Artist on Music Square</h4>
                <p style={{fontFamily: 'GilroyLight', marginRight:10}}>Everything you need to know about our 
                Top Independents!</p>
                 <button className="read-more-btn" type='submit'> Read more</button>
            </div> */}

        </div>
        <div className="d-flex pt-1">
            <div className="col-md-4">
                <button className="read-more-btn" type='submit'> Read more</button>
            </div>
            <div className="col-md-4">
                <button className="read-more-btn" type='submit'> Read more</button>
            </div>
            <div className="col-md-4">
                <button className="read-more-btn" type='submit'> Read more</button>
            </div>
        </div>
    </div>
  );
};

export default GetStarted;