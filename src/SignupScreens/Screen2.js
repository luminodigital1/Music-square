import React, { useState } from 'react';
import '../Screen1.css';
import './Screen2.css';import Logo from '../HomeScreen/Logo';

function Screen2() {

    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');

  return (
    <div className='container-full'>
        <div className="containerLeft">
        <h1 className='hignlight1'>Step into a World of Musical Talent and Creativity</h1>
        <h2 className='description1'>Embark into the Journey of Musical Discovery: Where Your Talent Shines and Your Music Career Thrives</h2>
        <p className="step">Step 2</p>
        <p className='stepDescription'>Verify your email address</p>
        <p className='description1'>Verify your email to unlock full access.</p>
        
        <div className="line-container">
            <div className="horizontal-line" style={{backgroundColor: 'black'}}></div>
            <div className="horizontal-line" style={{backgroundColor: 'black'}}></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
        </div>
        </div>

        <div className='containerRight'>
            <div style={{marginLeft: 300}}>
            <Logo/>
            </div>
            <p className='code-title'>Please check your inbox</p>
            <p className='code-desc'>We have send a code to email address <br/> abc*****yz@gmail.com</p>

    <div className='code'>
      <input className='digit'
        // type="number"
        value={digit1}
        onChange={(e) => setDigit1(e.target.value)}
        maxLength="1"
      />
      <input className='digit'
        // type="number"
        value={digit2}
        onChange={(e) => setDigit2(e.target.value)}
        maxLength="1"
      />
      <input className='digit'
        // type="number"
        value={digit3}
        onChange={(e) => setDigit3(e.target.value)}
        maxLength="1"
      />
      <input className='digit'
        // type="number"
        value={digit4}
        onChange={(e) => setDigit4(e.target.value)}
        maxLength="1"
      />
    </div>
        <p style={{marginLeft: 250, color: 'grey'}}>Didn't get a code? <a href='' style={{color: 'gray'}}>Click to resend</a></p>
        <button className="verify-button">Verify</button>
    </div>

    </div>
    // <div>
    //     <SignupForm/>
    // </div>
  );
}

export default Screen2;