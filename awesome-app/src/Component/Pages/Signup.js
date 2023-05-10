import { Button, Container, Col, Form, Row, InputGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "../../../node_modules/react-datepicker/dist/react-datepicker.min.css";
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from "formik";
import * as yup from 'yup';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const schema = yup.object().shape({
  fname: yup.string().required("Please Enter First Name"),
  lname: yup.string().required("Please Enter Last Name"),
  state: yup.string().required("Please Select State"),
  city: yup.string().required("Please Select City"),
  email: yup.string().email("Please Enter A Valid Email Address.").required("Please Enter Email"),
  confirmemail: yup.string().email("Please Enter A Valid Email Address.").required("Please Enter Confirm Email").test("confirm-email-test", "Email Does't Match",
    function (value) { return value === this.parent.email },
  ),

  password: yup.string().min(8, "Please Enter Atleast 8 Character").required("Password is Required"),
  confirmPassword: yup.string().required("Confirm Password is Required").test("confirm-password-test", "Password Does't Match",
    function (value) {
      { return value === this.parent.password }

    }),
  terms: yup.bool().required().oneOf([true], 'Please Select'),
});
function Signup() {
  const [users, setUser] = useState([]);
  const [city, setCity] = useState([]);
  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);
  const [confirmeye, setconfirmeye] = useState(true);
  const [confirmpassword, setconfirmpassword] = useState("password");
  const [confirmtype, setconfirmtype] = useState(false);



  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'states').then((result) => {
      result.json().then((resp) => {

        setUser(resp)
      })
    })
  }, [])
  let stateid = ""
  const handleStateChange = (event) => {

    stateid = event.target.value;

    if (stateid !== null && stateid !== "") {
      fetch(process.env.REACT_APP_API_URL + 'getcitylist', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }), // <-- Specifying the Content-Type

        body: "state=" + stateid // <-- Post parameters
      })
        .then((result) => {
          result.json().then((resp) => {
            setCity(resp)
          })
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const Eye = (event) => {

    if (password == "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    }
    else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  }
  const ConfirmEyes = (event) => {

    if (confirmpassword == "password") {
      setconfirmpassword("text");
      setconfirmeye(false);
      setconfirmtype(true);
    }
    else {
      setconfirmpassword("password");
      setconfirmeye(true);
      setconfirmtype(false);
    }
  }

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          fname: '',
          lname: '',
          state: '',
          city: '',
          email: '',
          confirmemail: '',
          password: '',
          confirmPassword: '',
          gender: '',
          DOB: '',
          phone: '',
          terms: false


        }}

        onSubmit={(values, actions) => {

          const formData = new FormData();
          formData.append("fname", values.fname);
          formData.append("lname", values.lname)
          formData.append("state", values.state)
          formData.append("city", values.city);
          formData.append("email", values.email);
          formData.append("confirmemail", values.confirmemail);
          formData.append("password", values.password);
          formData.append("confirmPassword", values.confirmPassword);
          formData.append("gender", values.gender);
          formData.append("DOB", values.DOB);
          formData.append("phone", values.phone);
          formData.append("terms", values.terms);

          fetch(process.env.REACT_APP_API_URL + 'register', {
            method: 'POST',
            body: formData // <-- Specifying the Content-Type fornData)
          })
            .then((result) => {

              result.json().then((resp) => {


                if (resp.status === "error") {

                  const timeout = setTimeout(() => {

                  }, 3000);

                  return () => clearTimeout(timeout);

                }
                else {

                  window.location.replace(process.env.REACT_APP_BASE_URL + "otp?token=" + resp.token + "&" + "IsReferral=0");
                }
              })
            })
            .catch((error) => {
              console.error(error + "hh");
            });

        }}



      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <div className="app">

            <ToastContainer />
            <div className="login-form">
              <p className="title text-center p-4 mb-4 fs-4">BOGOmazing App Sign Up Form</p>
              <Container>
                <p className="text-center">Please Create Your BOGOmazing App Account & Then Download The BOGOmazing App From<br />The Playstore To Log Into Your Account And Begin Saving Immediately!!!</p>
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" name="fname" placeholder="First Name" value={values.fname}
                        onChange={handleChange}
                        isInvalid={errors.fname} />
                      <Form.Control.Feedback type="invalid"> {errors.fname}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" name="lname" placeholder="Last Name" value={values.lname}
                        onChange={handleChange}
                        isInvalid={!!errors.lname} />
                      <Form.Control.Feedback type="invalid"> {errors.lname}</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select type="select" name="state" onChange={handleChange} onBlur={handleStateChange} value={values.state} isInvalid={!!errors.state}>
                        <option value="">Choose...</option>
                        {
                          users.map((item, i) =>
                            <option value={item.state_code}>{item.stateName}</option>

                          )}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.state}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Select type="select" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city}>
                        <option value="">Choose...</option>
                        {city.map((item, i) =>
                          <option value={item.city_code}>{item.CityName}</option>
                        )}


                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" name="email" placeholder="Email" onChange={handleChange} value={values.email} isInvalid={!!errors.email} />
                      <Form.Control.Feedback type="invalid">

                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Confirm Email</Form.Label>
                      <Form.Control type="text" name="confirmemail" placeholder="Confirm Email" onChange={handleChange} value={values.confirmemail} isInvalid={!!errors.confirmemail} />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmemail}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>

                        <Form.Control required type={password} name="password" placeholder="Password" onChange={handleChange} value={values.password} isInvalid={!!errors.password} />
                        <Button variant="outline-secondary" id="button-addon1" name='password'>
                          <FontAwesomeIcon onClick={Eye} icon={eye ? faEyeSlash : faEye} className="" size={'1x'} />
                        </Button>

                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup>
                        <Form.Control type={confirmpassword} name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={values.confirmPassword} isInvalid={!!errors.confirmPassword} />
                        <Button variant="outline-secondary" id="button-addon1" name="confirmpassword">
                          <FontAwesomeIcon onClick={ConfirmEyes} icon={confirmeye ? faEyeSlash : faEye} className="" size={'1x'} />
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} >
                      <Form.Label>Gender</Form.Label>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            type={type}
                            value="Male"
                            id={`inline-${type}-1`}
                            onChange={handleChange}

                          />
                          <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            type={type}
                            value="Female"
                            id={`inline-${type}-2`}
                            onChange={handleChange}

                          />
                          <Form.Check
                            inline
                            label="Other"
                            name="gender"
                            type={type}

                            value="Other"
                            id={`inline-${type}-3`}
                            onChange={handleChange}

                          />

                        </div>
                      ))}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>DOB</Form.Label>
                      <Form.Control type="date" name="DOB" placeholder="Date of Birth" onChange={handleChange} value={values.DOB} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Phone</Form.Label>
                      <InputMask className='form-control'
                        mask='999-999-9999'
                        placeholder="____-____-_____" name="phone" onChange={handleChange} value={values.phone}>
                      </InputMask>

                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Number.
                      </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="I Wish To Receive Bonus Offers"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  {/* <Row className="mb-3">
                  <Form.Group  as={Col} controlId="formGridEmail"> */}
                  <div className="captcha" style={{transform:"scale(0.85)", transformOrigin:"0 0"}}>
                  <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
  </div>
                 
                  {/* </Form.Group>
                  </Row> */}
                  <br />
                  <div className='text-center'>
                    <Button className='rounded-pill' size="lg" variant="danger" type="submit">
                      Proceed to Confirmation Screen
                    </Button>
                  </div>
                </Form>
                <br />
              </Container>
            </div>
            <br />

          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup