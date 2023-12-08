import React from 'react';
import '../CommunityForumPage/StartDiscussionEntity/StartDiscussionEntity.css';
import heart from './../../Images/heart.png';
import sendmsg from './../../Images/send-2.png';

function ForumPostOpen() {
  return (
    <div className="info-cont col-md-9" style={{marginTop: 55}}>
        <div className='d-flex row'>
            <p className='entity-head'> Why Solana is not moving towards its ATH?? </p>
            <div className='offset-md-8'>
            <p className='entity-time col-md-12 offset-md-2 mr-5'> Posted 1 hr ago </p>
            </div>
        </div>
        <div className='col-md-9'>
            <p className='entity-desp '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam eget elit auctor, tincidunt Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit orem ipsum dolor sit amet, casaf
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nullam eget elit auctor, tincidunt Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit orem ipsum dolor sit amet, casaf     
            </p>
            <table>
                <tr>
                    <td>
                        <img src={heart} alt='' height="20" width="20" />
                    </td>
                    <td className='col-md-2'>
                        <p style={{marginTop: 20, marginLeft: 5}}>50 Likes</p>
                    </td>
                    <td className='col-md-10' style={{textAlign: 'right'}}>
                        <img src={sendmsg} alt="" height="20" width="20" />
                    </td>
                </tr>
            </table>
        </div>
        <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
    </div>
  );
}

export default ForumPostOpen;
