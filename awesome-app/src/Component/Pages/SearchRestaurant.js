import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import DesignImage from '../../Images/btm-style.png';
import SubHeader from '../Header/SubHeader';
import Card from './Card';
import InputMask from 'react-input-mask';
// function isUSAZipCode(str) 
// {
//   return /^\d{5}(-\d{4})?$/.test(str);
// }
// function validateInput() 
// {
//   console.log("validateInput");
//   let zipCode = document.getElementById("zipCode").value;
//   let message = "";
//   if (isUSAZipCode(zipCode)) 
//   {
//     message = "Valid Zip Code";
//   } else {
//     message = "Invalid Zip Code";
//   }
//   document.getElementById("msg").innerHTML = message;
// }

function Search() {
  const [validated, setValidated] = useState(false);
  const [users, setUser] = useState([])
  const [city, setCity] = useState([])
  const [state ,setState]=useState();
  const [cityid,setCityid]=useState();
  const [zip,setZipcode]=useState(false);
  const [restaurants,setRestaurants]=useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+'states').then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        // console.warn(resp)
        setUser(resp)
      })
    })
  }, [])

  let stateid =""
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    //  setMessage(event.target.value);
    stateid = event.target.value;
   
    setState(stateid);
    if(stateid !==null && stateid !== "" ){
    fetch(process.env.REACT_APP_API_URL+'getcitylist', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: "state=" + stateid // <-- Post parameters
    })
      .then((result) => {
        result.json().then((resp) => {
       
          console.warn(resp)
          setCity(resp)

        })
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      event.preventDefault();
      event.stopPropagation();
    }else{

      let formData = new FormData();
      // console.log(formData);
      //
      let zipcode="";
      if(zip==false){
        zipcode ="";
      } 
      else{
        zipcode=zip;
      }
  
    formData.append('state', state);
    formData.append('city', cityid);
    formData.append('zip', zipcode);
  

    fetch(process.env.REACT_APP_API_URL+'search_restaurant', {
      method: 'POST',
      mode: 'cors', 
      body: formData, // <-- Post parameters
    })
      .then((result) => {
        console.log(result);
        result.json().then((resp) => {
          
          setRestaurants(resp.data);
        
          //console.warn(resp)
          //setCity(resp)
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
      <SubHeader/>
      <Container>
        <h1>To See If BOGOmazing App Is In Your City, Please Check Below</h1>

        <Row>
          <Col>BOGOmazing App Is Opening Up In New Markets On A Regular Basis So Please Check Back Often.</Col>
        </Row>
        <br />
        <br />
       
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Select required type="select"
                name="source" onChange={handleChange}
              >
                <option value="">Choose...</option>
                {
                  users.map((item, i) =>
                    <option key={i} value={item.stateid}>{item.stateName}</option>

                  )}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
              Please Select State
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Select required type="select"
                name="city" onChange={(e) => setCityid(e.target.value)}>
                <option value="">Choose...</option> 
                {city.map((item, i) =>
                  <option key={i} value={item.Id}>{item.CityName}</option>

                )}

                
              </Form.Select>
              <Form.Control.Feedback type="invalid">
               Please Select City
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Zipcode</Form.Label>
              <InputMask style={{backgroundImage:"none",borderColor:"#ced4da"}}  className='form-control'
                    mask='99999' 
                    name="zipcode" onChange={(e) => setZipcode(e.target.value)}>
                  </InputMask>
                  {/* <Form.Control.Feedback type="invalid">Please Enter Valid Zipcode</Form.Control.Feedback> */}
              {/* <Form.Control type="text" placeholder="" onChange={(e) => setZipcode(e.target.value)}/> */}
              
            </Form.Group>
          </Row>
          <br />
          <div className='text-center'>
            <Button className='rounded-pill' size="lg" variant="danger" type="submit">
              VIEW THE BOGOMAZING RESTAURANT MEMBER LIST
            </Button></div>
          <br />
        </Form>
      </Container>
      <Container>
        <h1 className='text-center fw-bolder'>SEARCH RESULTS</h1>
        <div className="hr-theme-slash-2">
          <div className="hr-line"></div>
          <div className="hr-icon"><i className="material-icons"> <img className="center" src={DesignImage} alt="DesignImage"/></i></div>
          <div className="hr-line"></div>
        </div>

        <br />
        <br />
        <Row xs={1} md={3} className="g-4">
       
          {restaurants.map((item, index) =>
          
             <Col>
              <Card key={index} item={item}>
              </Card>
             </Col>
              )}
       
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default Search;