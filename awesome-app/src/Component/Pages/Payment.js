import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

/*import InputMask from 'react-input-mask';*/

function Payment() {
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
        <br />
   
        <div className="login-form w-50">
          <div className="title text-center p-4 mb-4 fs-4">BOGOmazing App Payment Information</div>
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
                  <Form.Control required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" type="text" placeholder="Email" />
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
                  <Form.Control required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" type="text" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide A Valid Email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Exp Year</Form.Label>
                  <Form.Control required type="text" placeholder="Confirm Email" />
                  <Form.Control.Feedback type="invalid">
                    Please Provide A Valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I Understand My Card Will Be Charged ($29.95) Every 30 Days Until I Cancel It." />
                <Form.Check type="checkbox" label=" I Agree the BOGOmazing Terms & Conditions." />
              </Form.Group>
              <div className='text-center'>
                <Link to={process.env.REACT_APP_BASE_URL+"PaymentSuccess"}><Button variant="danger" type="button">
                  Proceed To Checkout
                </Button></Link>
              </div>
            </Form>
          </div>
        </div>
          <br />
    
        </div>
      
    </>
  );
}

export default Payment;