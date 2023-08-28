import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.min.css";
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
//import { IMaskInput } from 'react-imask';

function Signup() {
  const [validated, setValidated] = useState(false);
  const [users, setUser] = useState([])
  const [state, setState] = useState();
  const [city, setCity] = useState([])
  const [cityid, setCityId] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirmemail: "",
    password: "",
    confirmpassword: "",
    city: "",
    phoneno: "",
    gender: "Male",
    BonusOffers:false,
    Date:startDate
  });
  useEffect(() => {
    fetch("https://qd-fintech.com/BOGOmazing/mobile-api/api/states").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        // console.warn(resp)
        setUser(resp)
      })
    })
  }, [])
  console.log(startDate);
  //console.log(JSON.stringify("startDate",startDate));
  let stateid = ""
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    //  setMessage(event.target.value);

    //   const statename=event.target.name;

    const { name, value,type } = event.target;
    console.log(event.target);
    const new_value = (name === "email") ? value.toLowerCase() : value && (type=== "checkbox" ?  event.target.checked:event.target.value);
  //  const newvalue =evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setData((prev) => {
      return {
        ...prev, [name]: new_value
      }
    })
    stateid = event.target.value;
    console.log(stateid);
    setState(stateid);
    if (stateid !== null && stateid !== "") {
      fetch("https://qd-fintech.com/BOGOmazing/mobile-api/api/getcitylist", {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: "state=" + stateid // <-- Post parameters
      })
        .then((result) => {
          result.json().then((resp) => {
            console.log(resp);
            console.warn(resp)
            setCity(resp)
          })
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  //  const handleChangedata=(e)=>{
  //   // const name=e.target.name;
  //   // const value=e.target.value;

  //   // console.log(e.target.value);

  //  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      // fetch("https://qd-fintech.com/BOGOmazing/mobile-api/api/signup", {
      //   method: 'POST',
      //   headers: new Headers({
      //              'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      //     }),
      //   body: "state=" // <-- Post parameters
      // })
      // .then((result)=>{
      //     result.json().then((resp)=>{
      //       console.warn(resp)
      //       setCity(resp)
      //     })
      //   })
      // .catch((error) => {
      //     console.error(error);
      // });



    }

    setValidated(true);
  };

  return (

    <>

      <div className="app">
        <br />
        <br />

        <div className="login-form">
          <div className="title text-center p-4 mb-4 fs-4">BOGOmazing App Sign Up Form</div>
          <div className='container p-4'>
            <p className="text-center">Please Create Your BOGOmazing App Account & Then Download The BOGOmazing App From<br />The Playstore To Log Into Your Account And Begin Saving Immediately!!!</p>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" name="firstname" value={data.firstname} placeholder="First Name" onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">Please Enter Your First Name</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required type="text" name="lastname" value={data.lastname} placeholder="Last Name" onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">Please Enter Your Last Name</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select required type="select"
                    name="state" onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    {
                      users.map((item, i) =>
                        <option value={item.state_code}>{item.stateName}</option>

                      )}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Provide a Valid State.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Select required type="select"
                    name="city" onChange={(e) => setCityId(e.target.value)}>
                    <option value="">Choose...</option>
                    {city.map((item, i) =>
                      <option value={item.city_code}>{item.CityName}</option>

                    )}

                    <Form.Control.Feedback type="invalid">
                      Please Provide a Valid City.
                    </Form.Control.Feedback>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="text" name="email" value={data.email} placeholder="Email" onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please Provide A Valid Email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Confirm Email</Form.Label>
                  <Form.Control required type="text" name="confirmemail" value={data.confirmemail} placeholder="Confirm Email" onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please Provide A Valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="text" name="password" value={data.password} placeholder="Password" onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control required type="text" name="confirmpassword" value={data.confirmpassword} placeholder="Confirm Password" onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please Provide a Valid Confirm Password.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control required type="text" placeholder="Confirm Password" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group> */}
              </Row>
              
              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label>Gender</Form.Label>
               
                  {['radio'].map((type) => (
                    console.log(type),
                    <div key={`inline-${type}`} className="mb-3">
                      
                      <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        onChange={handleChange}
                        type={type}
                        value="Male"
                        checked={data.gender == "Male"}
                        id={`inline-${type}-1`}

                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        onChange={handleChange}
                        type={type}
                        value="Female"
                        checked={data.gender == "Female"}
                        id={`inline-${type}-2`}

                      />
                      <Form.Check
                        inline
                        label="Other"
                        name="gender"
                        onChange={handleChange}
                        type={type}
                        value="Other"
                        checked={data.gender == "Other"}
                        id={`inline-${type}-3`}

                      />

                    </div>
                  ))}
                  {/* <div className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="Gender"
            type="radio"
            onChange={handleChange} checked={data.gender=="Male"}
          />
          <Form.Check
            inline
            label="Female"
            name="Gender"
            type='radio'
            onChange={handleChange} checked={data.gender=="female"}
          />
          <Form.Check
            inline
            label="Other"
            name="Gender"
            type="radio"
            onChange={handleChange} checked={data.gender=="other"}           
          />
        </div> */}

                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>DOB</Form.Label>
                  <DatePicker className="form-control" selected={startDate} name='Date' onChange={(date) => setStartDate(date)} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Phone</Form.Label>
                  <InputMask className='form-control'
                    mask='999-999-9999'
                    placeholder="____-____-_____" name="phoneno" value={data.phoneno} onChange={handleChange}>
                  </InputMask>
                  {/* <InputMask className='form-control'
            mask='999-999-9999' 
            value={props.value} 
            onChange={props.onChange}  placeholder="____-____-_____" name="phoneno"> 
          </InputMask> */}
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Number.
                  </Form.Control.Feedback>
                  {/* <Form.Control type="text" placeholder="____-____-_____" /> */}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" name="BonusOffers" label=" I Wish To Receive Bonus Offers" checked={data.BonusOffers} onChange={handleChange}/>
              </Form.Group>

              <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
              <br />  
              <div className='text-center'>
                {/* <Link to='/BOGOmazing/public/otp'><Button variant="danger" type="button"> */}
                {/* Proceed to Confirmation Screen
            </Button></Link> */}
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