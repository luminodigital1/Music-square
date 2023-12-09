import React from 'react';
import '../CommunityForumPage/StartDiscussionEntity/StartDiscussionEntity.css';
import heart from './../../Images/heart.png';
import sendmsg from './../../Images/send-2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ForumPostOpen() {
  return (
    <div className="info-cont col-md-9" style={{marginTop: 55}}>
        <div className='d-flex row'>
            <p className='entity-head'> Why Solana is not moving towards its ATH?? </p>
            <div className='offset-md-8'>
            <p className='entity-time col-md-12 offset-md-2'> Posted 1 hr ago </p>
            </div>
        </div>
        <div className='col-md-12'>
            <p className='entity-desp '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam eget elit auctor, tincidunt Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit orem ipsum dolor sit amet, casaf
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nullam eget elit auctor, tincidunt Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit orem ipsum dolor sit amet, casaf     
            </p>
            <Row>
                <Col className='d-flex' sm={9}>
                    <img src={heart} alt="" width="20px" height="20px"/>
                    <p style={{marginLeft: 5}}>50 Likes</p>
                </Col>
                <Col sm={1}>
                    <img src={sendmsg} alt="" width="20px" height="20px"/>
                </Col>
            </Row>
        </div>
        <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
    </div>
  );
}

export default ForumPostOpen;
