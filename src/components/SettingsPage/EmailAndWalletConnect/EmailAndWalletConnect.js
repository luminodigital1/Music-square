import React from "react";

function EmailAndWalletConnect() {
    return(
        <div className="info-cont">
            <p className='bi-title' >Email and Wallet Connect</p>
            <p className='bi-desp' >Connect and manage your email preferences and your digital wallets</p>
            <div className='col-md-12'>
                <label className='bi-label'>Email address</label>
                <input className='border border-grey set-hg' type='text'/>
            </div>
            <div className='col-md-12'>
                <label className='bi-label'>Wallet</label>
                <button className='set-hg' style={{backgroundColor:"#fee500", border:0, width: "100%"}} >Connect Wallet</button>
            </div>
        </div>
    );
}

export default EmailAndWalletConnect