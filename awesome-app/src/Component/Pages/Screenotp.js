import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import InputMask from 'react-input-mask';
import 'react-toastify/dist/ReactToastify.css';

function Screenotp() {
    const [validated, setValidated] = useState(false);
    const [otp , setOtp] = useState();
    const { token } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
   
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        let formData = new FormData();
       
        formData.append('otp', otp);
        formData.append('token', token);
        
        fetch(process.env.REACT_APP_API_URL+'verifyOtp', {
          method: 'POST',
          mode: 'cors', 
          body: formData, 
        })
          .then((result) => {
    
              result.json().then((resp) => {
                toast(resp.message);
                if(resp.status==="error"){ 
                  console.log(resp.status)
                }
                else{
                
                  window.location.replace(process.env.REACT_APP_BASE_URL+"find/"+token);
                } 
            
            })
          })
          .catch((error) => {
            console.error(error);
          });
    }

    setValidated(true);
  };


  const resendOtp = (event) => {
    let formData = new FormData();
    console.log(token);
    formData.append('token', token);
    fetch(process.env.REACT_APP_API_URL+'resendOtp', {
      method: 'POST',
      mode: 'cors', 
      body: formData, 
    })
      .then((result) => {

          result.json().then((resp) => {
            toast(resp.message);
           
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
    
    <div className="app">
    <ToastContainer />
    <br/>
    <br/>
      <div className="login-form text-center w-50">
        <div className="title text-center p-4 mb-4 fs-4">BOGOmazing App Sign Up Confirmation</div>
        <div className='container p-4'>
       {/* <p>Thank You For Becoming A BOGOmazing App Member, A Confirmation Email Has Been Sent To Your Registered Email Address. You just Need To Download BOGOmazing App From Either The Playstore Or The Apple Store & Begin Saving Money Immediately At Your Favorite Restaurants & Businesses. Please Check Your Spam Folder As Sometimes The Confirmation Email Goes Into That Folder. You Will Earn $29.95 Per Month For Every BOGOmazing App Referral. For That Just Go To Invites In Your Profile Menu To Send Out Invites To Your Contacts. Thank You In Adance For Any & All Referrals!!!</p>
        <p>Please Enter The 4 Digit Code</p>*/}
        <p>A Confirmation Email Has Been Sent To The Email You Just Registered With.  Please Check Your Spam/Junk Folder As Sometimes The Confirmation Email Will End Up In That Folder.  Just 2 More Quick Steps & You Can Begin Saving Immediately.  
        </p>
        <p>Please Enter The 4 Digit Code</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 align-items-center justify-content-center text-center">
        
            <Col xs="auto">
            <Form.Group as={Col} controlId="formGridEmail" className="align-items-center">
            <InputMask required className='form-control text-center' style={{ width: "100px"}}
                mask='9999' 
                onChange={(e) => setOtp(e.target.value)}
                placeholder='0000'>
              </InputMask>
              {/* <Form.Control className='text-center' style={{ width: "100px"}} required type="text" placeholder="0000" onChange={(e) => setOtp(e.target.value)} /> */}
              <Form.Control.Feedback type="invalid">
                  Please Enter OTP

                  </Form.Control.Feedback>
            </Form.Group>
            </Col>
          
          </Row>
        
          {/* <Link to={process.env.REACT_APP_BASE_URL+"find"}><Button variant="danger" type="button">
          Click Here To Go To Find Out Screen
          </Button></Link> */}
          <Button className='rounded-pill' size="lg" variant="danger" type="submit">
          Click Here Go To The 2nd To Last Step
         </Button>
          <br/>
          <br/>
        
          <Link type="button" name="code_verify" onClick={resendOtp}>Resend Code</Link>
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