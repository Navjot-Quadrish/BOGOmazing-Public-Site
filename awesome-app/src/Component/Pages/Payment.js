import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Popup from './Popup';
/*import InputMask from 'react-input-mask';*/

function Payment() {
  const [validated, setValidated] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
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
        <br />
        <br />
        <div className="login-form">
          <div className="title text-center p-4 mb-4 fs-4">BOGOmazing Subscription Payment Information</div>
          <div className='container p-4'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" placeholder="Name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" type="text" placeholder="Email" value="angelabrigid@yopmail.com" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide A Valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control required type="text" placeholder="" />

                  <Form.Control.Feedback type="invalid">
                    Credit Card is Required.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control required type="text" placeholder="" />

                  <Form.Control.Feedback type="invalid">
                    CVV is Required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Exp Month</Form.Label>
                  <Form.Control required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" type="text" placeholder="02" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide Exp Month.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Exp Year</Form.Label>
                  <Form.Control required type="text" placeholder="2025" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide A Valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Billing Address </Form.Label>
                  <Form.Control required type="text" placeholder="Billing Address" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide Billing Address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Billing Zip Code</Form.Label>
                  <Form.Control required type="text" placeholder="Billing Zip Code" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide Billing Zip Code.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>


              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I Understand My Card Will Be Charged ($29.95) Every 30 Days Until I Cancel My Membership."  defaultChecked={isChecked}
                onChange={handleChange} />
                <Form.Check type="checkbox" label={
                  <>
                    I Agree the BOGOmazing Terms & Conditions. {' '}
                    <a class="text-color" onClick={handleOpenPopup} target="_blank" rel="noopener noreferrer">
                    Click Here To View
                    </a>
                    
                  </>
                }  defaultChecked={isChecked}
                onChange={handleChange} />


                {/*<Form.Check type="checkbox" label={
                  <>
                    I Agree the BOGOmazing Terms & Conditions {' '}
                    <a href={process.env.REACT_APP_BASE_URL+"Terms&Conditions"} onClick={handleOpenPopup} target="_blank" rel="noopener noreferrer">
                    Click Here To View
                    </a>
                    .
                  </>
                }  defaultChecked={isChecked}
              onChange={handleChange} />*/}


                {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />}
              </Form.Group>
              <div className='text-center'>
                <Link to={process.env.REACT_APP_BASE_URL+"PaymentSuccess"}><Button variant="danger" type="button">
                  Submit BOGOmazing Subscription Payment Information
                </Button></Link>
              </div>
            </Form>
          </div>
        </div>
          <br />
          <br />
        </div>
      
    </>
  );
}

export default Payment;