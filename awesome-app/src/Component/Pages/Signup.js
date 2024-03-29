import {Button,Container,Col,Form,Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
//import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.min.css";
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from "formik";
import * as yup from 'yup';
import CustomDatePicker from './CustomDatePicker';

import {
  useSearchParams
 
 } from "react-router-dom";
 
const schema = yup.object().shape({
  fname: yup.string().required("Please Enter First Name"),
  lname: yup.string().required("Please Enter Last Name"),
  state: yup.string().required("Please Select State"),
  city: yup.string().required("Please Select City"),
  email:yup.string().email("Please Enter A Valid Email Address.").required("Please Enter Email"),
  confirmemail: yup.string().email("Please Enter A Valid Email Address.").required("Please Enter Confirm Email").test("confirm-email-test","Email Does't Match",
  function(value) {return value === this.parent.email},
  ),
  
  password: yup.string().min(8, "Please Enter Atleast 8 Character").required("Password is Required"),
  confirmPassword: yup.string().required("Confirm Password is Required").test("confirm-password-test","Password Does't Match",
  function(value){ {return value === this.parent.password}

 }),
  // state: yup.string().required(),

  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
function Signup() {
 // const queryParameters = new useSearchParams(window.location.search)
  const [searchParams, setSearchParams] = useSearchParams(window.location.search);
  const type = searchParams.get("type");
  console.log(type);

  const [dob, setDob] = useState(null);

  const handleDateChange = (date) => {
    setDob(date);
  };
  var hex = "30342d3031302d3030303034", // ASCII HEX: 37="7", 57="W", 71="q"
    bytes = [],
    str;

for(var i=0; i< hex.length-1; i+=2){
    bytes.push(parseInt(hex.slice(i, 2), 16));
}

str = String.fromCharCode.apply(String, bytes);
console.log(str);
  const [validated, setValidated] = useState(false);
  const [users, setUser] = useState([]);
  const [city, setCity] = useState([]);

  
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
        }),
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

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {

      fetch(process.env.REACT_APP_API_URL + 'register', {
        method: 'POST',
        mode: 'cors',
        body: data // <-- Post parameters
      })
        .then((result) => {

          result.json().then((resp) => {
            
            toast(resp.message);
            if (resp.status === "error") {

              const timeout = setTimeout(() => {

              }, 3000);

              return () => clearTimeout(timeout);

            }
            else {

              window.location.replace(process.env.REACT_APP_BASE_URL + "otp/" + resp.token);
            }
          })
        })
        .catch((error) => {
          console.error(error);
        });


    }

    setValidated(true);
  };


  return (
    <>
      <Formik
      validationSchema={schema}
      // onSubmit={console.log}
      initialValues={{
        fname: '',
        lname: '',
        state: '',
        city: '',
        email: '',
        confirmemail: '',
        password:'',
        confirmPassword:'',
        terms: false
       

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
        <br />
        <br />
        <ToastContainer />
        <div className="login-form">
          <p className="title text-center p-4 mb-4 fs-4">BOGOmazing App Sign Up Form</p>
          <Container>  
            <p className="text-center">BOGOmazing Is Only A $29.95 Per Month Subscription Which Will Save You $500 - $1,000 Per Month<br /> If Used Just Once Per Day.  Save More With A Party Of 4 Or 6 People.  Sign Up Now To Start Saving Immediately.<br /> You Can Cancel Any Time.
            </p>
       
            {/* <Form noValidate validated={validated} onSubmit={handleSubmit1}> */}
            <Form noValidate validated={validated} onSubmit={handleSubmit1}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="fname" placeholder="First Name" value={values.fname}
             onChange={handleChange}
              isInvalid={!!errors.fname}/>
                  <Form.Control.Feedback type="invalid"> {errors.fname}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lname" placeholder="Last Name" value={values.lname}
              onChange={handleChange}
              isInvalid={!!errors.lname}/>
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
                        <option value={item.stateid}>{item.stateName}</option>

                      )}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                  {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Select type="select" name="city" value={values.city} onChange={handleChange}  isInvalid={!!errors.city}>
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
                  <Form.Control type="text" name="email" placeholder="Email" onChange={handleChange} value={values.email} isInvalid={!!errors.email}/>
                  <Form.Control.Feedback type="invalid">
                    {/* {error.email ? <span className='err'>{error.email}</span> : "Please Enter Email"} */}
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Confirm Email</Form.Label>
                  <Form.Control type="text" name="confirmemail" placeholder="Confirm Email" onChange={handleChange} value={values.confirmemail} isInvalid={!!errors.confirmemail}/>
                  <Form.Control.Feedback type="invalid">
                  {errors.confirmemail}
                    {/* {error.confirmemail ? <span className='err'>{error.confirmemail}</span> : "Please Enter Confirm Email"} */}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" name="password" placeholder="Password" onChange={handleChange}  value={values.password} isInvalid={!!errors.password}/>
                  <Form.Control.Feedback type="invalid" >
                  {errors.password}
                    {/* {error.password ? <span className='err'>{error.password}</span> : "Please Enter Password"} */}
                  </Form.Control.Feedback>

                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Confirm Password</Form.Label>
                 
                  <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}  value={values.confirmPassword} isInvalid={!!errors.confirmPassword}/>
                  <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                    {/* {error.confirmpassword ? <span className='err'>{error.password}</span> : "Please Enter Confirm Password"} */}
                  </Form.Control.Feedback>

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

                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type={type}
                        value="Female"
                        id={`inline-${type}-2`}

                      />
                      <Form.Check
                        inline
                        label="Other"
                        name="gender"
                        type={type}

                        value="Other"
                        id={`inline-${type}-3`}

                      />

                    </div>
                  ))}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>DOB</Form.Label>
                  {/* <DatePicker className="form-control" name="DOB" selected={startDate} /> */}
                  {/*<Form.Control type="date" name="dob" placeholder="Date of Birth"  />*/}
                  <CustomDatePicker selectedDate={dob} onChange={handleDateChange} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Phone</Form.Label>
                  <InputMask className='form-control'
                    mask='999-999-9999'
                    placeholder="____-____-_____" name="phoneno">
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

              <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
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
              <br />
            </div>
      )}
      </Formik>
    </>
  );
}

export default Signup