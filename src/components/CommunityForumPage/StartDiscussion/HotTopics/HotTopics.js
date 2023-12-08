import React, {useState} from 'react';
// import StartDiscussionEntity from '../StartDiscussionEntity/StartDiscussionEntity';
import './HotTopics.css'

function HotTopics() {
  return (
    <div className='ht-cont'>
        <h3 className='paneltitle'>Hot Topics</h3>
        <div>
            <table style={{backgroundColor: 'white'}}>
                <tr >
                    <td className='cell-left'>
                    New feature to get launch on Music Square update 3.1.0.1 
                    </td>
                </tr>
                <tr>
                    <td className='cell-right'>
                    today 13:34 
                    </td>
                </tr>
                <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
                <tr>
                    <td className='cell-left'>
                    Excitement Builds as ETH 2.0 Beacon Chain Launch Nears 
                    </td>
                </tr>
                <tr>
                    <td className='cell-right'>
                    today 10:30 
                    </td>
                </tr>
                <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
                <tr>
                    <td className='cell-left'>
                    Rare Crypto Artwork Sells for Millions in Record-Breaking Auction
                    </td>
                </tr>
                <tr>
                    <td className='cell-right'>
                    today 5:20 
                    </td>
                </tr>
                <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
                <tr>
                    <td className='cell-left'>
                    Total Value Locked in Decentralized Finance Hits $100 Billion Milestone 
                    </td>
                </tr>
                <tr>
                    <td className='cell-right'>
                    today 2:25 
                    </td>
                </tr>
                <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
                <tr>
                    <td className='cell-left'>
                    Regulatory Challenges Mount for Crypto Exchanges as Government ...
                    </td>
                </tr>
                <tr>
                    <td className='cell-right'>
                    a day ago 
                    </td>
                </tr>
                <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
                <tr>
                    <td className='cell-left'>
                    NFT Mania Continues: Rare Crypto Artwork Sells for Millions in Record ...
                    </td>
                </tr>
                <tr>
                    <td className='cell-right'>
                    a week ago 
                    </td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default HotTopics;
