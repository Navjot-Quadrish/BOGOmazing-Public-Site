import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';



function Screenotp() {
    const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
 

  return (
    <>
    
    <div className="app">
    <br/>
    <br/>
      <div className="login-form text-center">
        <div className="title text-center p-4 mb-4 fs-4">BOGOmazing App Sign Up Form Confirmation Screen</div>
        <div className='container p-4'>
        <p>Thank You For Becoming A BOGOmazing App Member, A Confirmation Email Has Been Sent To Your Registered Email Address. You just Need To Download BOGOmazing App From Either The Playstore Or The Apple Store & Begin Saving Money Immediately At Your Favorite Restaurants & Businesses. Please Check Your Spam Folder As Sometimes The Confirmation Email Goes Into That Folder. You Will Earn $29.95 Per Month For Every BOGOmazing App Referral. For That Just Go To Invites In Your Profile Menu To Send Out Invites To Your Contacts. Thank You In Adance For Any & All Referrals!!!</p>
<p>Please Enter The 4 Digit Code</p>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
     
      <Col xs="auto" style={{ marginLeft: "320px" }}>
        <Form.Group as={Col} controlId="formGridEmail" className="align-items-center">
        
          <Form.Control className='text-center' style={{ width: "80px"}} required type="text" placeholder="0000" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Col>
       
      </Row>
     
      <Link to={process.env.REACT_APP_BASE_URL+"find"}><Button variant="danger" type="button">
      Click Here To Go To Find Out Screen
      </Button></Link>
      <br/>
      <br/>
     
      <Link type="button"  name="code_verify">Resend Code</Link>
    </Form>
    </div>
    </div>
    <br/>
    <br/>
    </div>
    </>
  );
}

export default Screenotp;