import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
//import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.min.css";
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Signup() {
  const [validated, setValidated] = useState(false);
  const [users, setUser] = useState([]);
  const [city, setCity] = useState([]);
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: '',
    confirmPassword: ''
  })
  // const [input, setInput] = useState({
  //   email: '',
  //   confirmemail:'',
  //   password: '',
  //   confirmpassword: ''
  // });

  // const [error, setError] = useState({
  //   email: '',
  //   confirmemail:'',
  //   password: '',
  //   confirmpassword: ''
  // })

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'states').then((result) => {
      result.json().then((resp) => {

        setUser(resp)
      })
    })
  }, [])
  let stateid = ""
  const handleChange = (event) => {

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
  const handlePasswordChange =(evnt)=>{
    const passwordInputValue = evnt.target.value.trim();
    console.log(passwordInputValue);
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
    console.log(NewPasswordInput);
    setPasswordInput(NewPasswordInput);
    
}
const handleValidation= (evnt)=>{
  const passwordInputValue = evnt.target.value.trim();
  console.log(passwordInputValue);
  const passwordInputFieldName = evnt.target.name;
  console.log(passwordInputFieldName);
      //for password 
if(passwordInputFieldName==='password'){
  const uppercaseRegExp   = /(?=.*?[A-Z])/;
  const lowercaseRegExp   = /(?=.*?[a-z])/;
  const digitsRegExp      = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp   = /.{8,}/;
  const passwordLength =      passwordInputValue.length;

  const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
  console.log(uppercasePassword);
  const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
  const digitsPassword =      digitsRegExp.test(passwordInputValue);
  const specialCharPassword = specialCharRegExp.test(passwordInputValue);
  const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
  let errMsg ="";
  if(passwordLength===0){
          errMsg="Password is empty";
  }else if(!uppercasePassword){
          errMsg="At least one Uppercase";
  }else if(!lowercasePassword){
          errMsg="At least one Lowercase";
  }else if(!digitsPassword){
          errMsg="At least one digit";
  }else if(!specialCharPassword){
          errMsg="At least one Special Characters";
  }else if(!minLengthPassword){
          errMsg="At least minumum 8 characters";
  }else{
      errMsg="";
  }

  setPasswordErr(errMsg);
  }
  // for confirm password
  if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
          
      if(passwordInput.confirmPassword!==passwordInput.password)
      {
      setConfirmPasswordError("Confirm password is not matched");
      }else{
      setConfirmPasswordError("");
      }
      
  }
}
  // const onInputChange = e => {
  //   const { name, value } = e.target;
  //   setInput(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  //   validateInput(e);
  // }
  // const validateInput = e => {
  //   let { name, value } = e.target;
  //   setError(prev => {
  //     const stateObj = { ...prev, [name]: "" };
  //     console.log(value);
  //     console.log(input.confirmemail)
  //     console.log(input.email)
  //     console.log(input.confirmemail && value !== input.confirmemail);

  //     switch (name) {
  //       case "email":
  //         if (!value) {
  //           stateObj[name] = "Please enter Email.";
  //         }else if (input.confirmemail && input.email !== input.confirmemail) {
  //           stateObj["confirmemail"] = "Email and Confirm Email does not match.";
  //         } else {
  //           stateObj["confirmemail"] = input.confirmemail ? "" : error.confirmemail;
  //         }
  //         break;
  //       case "confirmemail":
  //         if (!value) {
  //           stateObj[name] = "Please enter Confirm Email.";
  //         }else if (input.email && input.confirmemail !== input.email) {
  //           stateObj["email"] = "Password and Confirm Email does not match.";
  //         } else {
  //           stateObj["email"] = input.email ? "" : error.email;
  //         }
  //         break;
  //       case "password":
  //         if (!value) {
  //           stateObj[name] = "Please enter Password.";
  //         } else if (input.confirmpassword && value !== input.confirmpassword) {
  //           stateObj["confirmpassword"] = "Password and Confirm Password does not match.";
  //         } else {
  //           stateObj["confirmPassword"] = input.confirmpassword ? "" : error.confirmpassword;
  //         }
  //         break;

  //       case "confirmpassword":
  //         if (!value) {
  //           stateObj[name] = "Please enter Confirm Password.";
  //         } else if (input.password && value !== input.password) {
  //           stateObj[name] = "Password and Confirm Password does not match.";
  //         }
  //         break;

  //       default:
  //         break;
  //     }

  //     return stateObj;
  //   });
  // }
  
  const handleSubmit = (event) => {
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
      <div className="app">
        <br />
        <br />
        <ToastContainer />

        <div className="login-form">
          <div className="title text-center p-4 mb-4 fs-4">BOGOmazing App Sign Up Form</div>
          <div className='container p-4'>
            <p className="text-center">Please Create Your BOGOmazing App Account & Then Download The BOGOmazing App From<br />The Playstore To Log Into Your Account And Begin Saving Immediately!!!</p>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" name="fname" placeholder="First Name" />
                  <Form.Control.Feedback type="invalid">Please Enter First Name</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required type="text" name="lname" placeholder="Last Name" />
                  <Form.Control.Feedback type="invalid">Please Enter Last Name</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select required type="select" name="state" onChange={handleChange} >
                    <option value="">Choose...</option>
                    {
                      users.map((item, i) =>
                        <option value={item.state_code}>{item.stateName}</option>

                      )}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Select State
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Select required type="select" name="city">
                    <option value="">Choose...</option>
                    {city.map((item, i) =>
                      <option value={item.city_code}>{item.CityName}</option>
                    )}


                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Select City
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="text" name="email" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">
                    {/* {error.email ? <span className='err'>{error.email}</span> : "Please Enter Email"} */}

                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Confirm Email</Form.Label>
                  <Form.Control required type="text" name="confirmemail" placeholder="Confirm Email" />
                  <Form.Control.Feedback>
                    {/* {error.confirmemail ? <span className='err'>{error.confirmemail}</span> : "Please Enter Confirm Email"} */}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" name="password" placeholder="Password" onChange={handlePasswordChange} onKeyUp={handleValidation} value={passwordInput.password} />
                  {(() => { 
if(passwordError) {
                  
                  <Form.Control.Feedback type="invalid" style={{display:"block"}}>
                
                  <p className="text-danger">{passwordError}</p>
                    {/* {error.password ? <span className='err'>{error.password}</span> : "Please Enter Password"} */}
                  </Form.Control.Feedback>
}else{
                  <Form.Control.Feedback type="invalid">
               
               Please Select City
                  </Form.Control.Feedback>
                  }

})()}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Confirm Password</Form.Label>
                 
                  <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handlePasswordChange} onKeyUp={handleValidation} value={passwordInput.confirmPassword} />
                  <Form.Control.Feedback type="invalid">
                  <p className="text-danger">{confirmPasswordError}</p>
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
                        checked="checked"
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
                  <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Phone</Form.Label>
                  <InputMask required className='form-control'
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
                  label="I Wish To Receive Bonus Offers"
                  feedback="Please Select"
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
          </div>
        </div>
        <br />
        <br />
      </div>

    </>
  );
}

export default Signup