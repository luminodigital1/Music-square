import React from 'react';
import Form from 'react-bootstrap/Form';
import { ToggleButtonGroup, ToggleButton, Row, Col } from "react-bootstrap";
import './NotificationSetting.css'
function ToggleElement(props) {
    
    return (
<Form style={{marginTop: 10}}>
    <Row>
        <Col>
        <label className='toogleEleTitle'>{props.title}</label>
        </Col>
        <Col>
      <Form.Check
        reverse
        // label = {props.title}
        className='tooglebtn'
        type="switch"
        id="custom-switch"
        style={{borderColor: '#fee500', backgroundColor: '#fee500'}}
      />
      </Col>
      </Row>
</Form>
);
}

export default ToggleElement;