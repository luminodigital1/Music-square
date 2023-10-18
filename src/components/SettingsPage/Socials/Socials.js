import React from "react";
import stremefi from '../../../Images/Stremefi.png';
import x from '../../../Images/x.png';
import telegram from '../../../Images/telegram.png';
import discord from '../../../Images/discord.png';

function Socials() {
    return(
        <div className="info-cont">
            <p className='bi-title' style={{marginBottom: 0}} >Socials</p>
            <p className='bi-desp' style={{marginBottom: 10}} >Connect to your active social media profiles</p>
            {/* <div className='col-md-12 d-flex justify-content-between'>
                <div className="d-flex">
                    <img src={stremefi} alt="" height="10px" width="10px"/>
                    <p>StreamiFi</p>
                </div>
            </div> */}
            < div className="">
                <div className="col-md-10">                  
                    <div className="d-flex align-items-center">
                        <img className="connect-icon" src={stremefi} alt=""
                        style={{marginTop: -15, backgroundColor:'#000247'}}/>
                        <p className="col-md-5 connect-title">StreamiFi</p>
                        <button className="connect-btn" type="submit" 
                        style={{width:132}}
                        >Connect</button>
                    </div>
                    <div className="d-flex">
                        <img className="connect-icon" src={x} alt=""/>
                        <p className="col-md-5 connect-title">X</p>
                        <button className="col-md-3 disconnect" type="submit"
                        >Disconnect</button>
                    </div>
                    <div className="d-flex">
                        <img className="connect-icon" 
                        style={{backgroundColor: "#039BE5"}} src={telegram} alt=""/>
                        <p className="col-md-5 connect-title"
                        >Telegram</p>
                        <button className="col-md-3 disconnect" type="submit">Disconnect</button>
                    </div>
                    <div className="d-flex">
                        <img className="connect-icon" 
                        style={{backgroundColor: "#5865F2"}} src={discord} alt=""/>
                        <p className="col-md-5 connect-title">Discord</p>
                        <button className="col-md-3 disconnect" type="submit">Disconnect</button>
                    </div>
                    
                  </div>
                </div>
        </div>
    );
}

export default Socials