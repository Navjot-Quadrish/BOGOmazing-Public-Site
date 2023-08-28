import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect,useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FindBogo() {
  const [validated, setValidated] = useState(false);
  const [users, setUser] = useState([]);
  const [referral, setReferral] = useState();
  //const [staff, setStaff] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [showStaffContent, setStaffContent] = useState(false);

  const { token } = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+'findBogoList').then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp.data)
      })
    })
  }, [])

  const handleChange = (event) => {
    if (event.target.value=="1" || event.target.value=="7" ) {
      setReferral("referral");
    }
    if (event.target.value=="2" ) {
      setReferral("staff");
     // setText("Please Enter In The Number Of The Restaurant Staff Person <br /> Who Referred You So They Can Get Credit For Referring You");
      setShowContent(false); // Show content only when a value is selected
      setStaffContent(true);
    } 

    if (event.target.value=="1"){
      //setText("Please Enter In The Number Of The BOGOmazing Member <br /> Who Referred You So They Can Earn A FREE Month With BOGOmazing");
      setShowContent(true);
      setStaffContent(false);
    }

    
    if (event.target.value=="3" || event.target.value=="4" || event.target.value=="5" || event.target.value=="6"){
      //setText(""); 
      setShowContent(false);
      setStaffContent(false);
    }


  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
     
      event.stopPropagation();
    }else{
      const data = new FormData(event.target);
      data.append('token', token);

      fetch(process.env.REACT_APP_API_URL+'verifyRefferal', {
        method: 'POST',
        mode: 'cors', 
        body: data, 
      })
        .then((result) => {

            result.json().then((resp) => {

              if(resp.status==="error"){ 
                toast.error(resp.message);
              }
              else{
                toast.success(resp.message);
               window.location.replace(process.env.REACT_APP_BASE_URL+"Payment/"+token);
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
      <ToastContainer />
        <br />
        <br />
        <div className="login-form text-center">
          <div className="title text-center p-4 mb-4 fs-4">How Did You Find Out About BOGOmazing</div>
          
          <div className='container p-4'>
              {showContent && (
              <>
                <p>Please Enter In The Number Of The BOGOmazing Member </p>
                <p>Who Referred You So They Can Earn A FREE Month With BOGOmazing</p>
                <br />
              </>
            )}
              {showStaffContent && (
              <>
                <p>Please Enter In The Number Of The Restaurant Staff Person</p>
                <p>Who Referred You So They Can Get Credit For Referring You</p>
                <br />
              </>
            )}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">

                  <Form.Select name="findBogoID" required type="select" onChange={handleChange}>
                    <option disabled selected hidden>Please Select How You Found Out About BOGOmazing</option>
                      { 
                        users.map((item,i)=>
                            <option value={item.id}>{item.name}</option>
                        
                      )}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Select Type
                  </Form.Control.Feedback>
                </Form.Group>

              </Row>
              {(() => {
         
                if (referral=="referral") {
                  return <Row className="mb-3 align-items-center justify-content-center text-center" >
                  <Form.Group as={Col} md="2">
                    <Form.Control type="text" className='text-center' name="code1" placeholder="00" required />
                   </Form.Group>
                  <Form.Group as={Col} md="2">
                    <Form.Control type="text" className='text-center' name="code2" placeholder="000" required />
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                    <Form.Control type="text" className='text-center' name="code3" placeholder="00000" required />
                  </Form.Group>
                </Row>;
                }else
                if (referral=="staff") {
                  return <Row className="mb-3 align-items-center justify-content-center text-center">
                  <Form.Group as={Col} md="2">
                      <Form.Control type="text" className='text-center' name="code3" placeholder="00000" required />
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                      <Form.Control type="text" className='text-center' name="code1" placeholder="00" required />
                     </Form.Group>
    
                    <Form.Group as={Col} md="2">
                      <Form.Control type="text" className='text-center' name="code2" placeholder="000" required />
                    </Form.Group>
                  </Row>;
                }else{

                  return null;
                }
               
              })()}

             
              <Button variant="danger" size="lg" type="submit">
              Click Here To Select
              </Button>
            </Form>
          </div>
        </div>
        <br />
        <br />
      </div>

    </>
  );
}

export default FindBogo;