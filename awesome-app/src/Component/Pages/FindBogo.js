import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect,useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import InputMask from 'react-input-mask';
import 'react-toastify/dist/ReactToastify.css';

function FindBogo() {
  const [validated, setValidated] = useState(false);
  const [users, setUser] = useState([]);
  const [referral, setReferral] = useState("");
  const [staffreferral, setstaffreferral] = useState('');
  const [code, setCode] = useState("");
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
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
   console.log(event.target.value) ;
    if (event.target.value=="1") {
    console.log("a")
    setstaffreferral("ref");
      console.log(referral)
    }
    else{
      console.log("b");
      console.log(referral)
      setstaffreferral("");

    }
    // if (event.target.value=="1") {
    //   setReferral("referral");
    // }
    // else{
    //   setReferral([]);

    // }
    // if (event.target.value=="7"){
    //   setReferral("referral");
    // }
    // else{
    //   setReferral([]);

    // }

    if (event.target.value=="2" || event.target.value=="7") {
      setReferral("staff");
    }
    else{
      setReferral([]);

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
    
        <div className="login-form text-center w-50">
          <div className="title text-center p-4 mb-4 fs-4">How Did You Find Out About BOGOmazing</div>
          <div className='container p-4'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">

                  <Form.Select name="findBogoID" required type="select" onChange={handleChange}>
                    <option value="">Select Find BOGO Type</option>
                      { 
                        users.map((item,i)=>
                            <option value={item.id}>{item.name}</option>
                        
                      )}
                  </Form.Select>
                  <Form.Control.Feedback className='text-left' type="invalid">
                    Please Select Type
                  </Form.Control.Feedback>
                </Form.Group>

              </Row>
              {(() => {
                  console.log(referral);
                if (staffreferral=="ref") {
                  return <Row className="mb-3 align-items-center justify-content-center text-center" >
                  <Form.Group as={Col} md="2">
                  <InputMask required className='form-control text-center'
                        mask='99'
                        placeholder="00" name="code1"   onChange={(e) => setCode(e.target.value)} value={code}>
                      </InputMask>
                    
                   </Form.Group>
                  <Form.Group as={Col} md="2">
                  <InputMask required className='form-control text-center'
                        mask='999'
                        placeholder="000" name="code2"   onChange={(e) => setCode1(e.target.value)} value={code1}>
                      </InputMask>
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                  <InputMask required className='form-control text-center'
                        mask='99999'
                        placeholder="00000" name="code3"   onChange={(e) => setCode2(e.target.value)} value={code2}>
                      </InputMask>
                  </Form.Group>
                </Row>;
                }else
                if (referral=="staff") {
                  console.log(referral);
                  return <Row className="mb-3 align-items-center justify-content-center text-center">
                  <Form.Group as={Col} md="3">
                  <InputMask required className='form-control text-center'
                        mask='99999'
                        placeholder="00000" name="code1"   onChange={(e) => setCode3(e.target.value)} value={code3}>
                      </InputMask>
                  
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                    <InputMask required className='form-control text-center'
                        mask='99'
                        placeholder="00" name="code2" onChange={(e) => setCode4(e.target.value)} value={code4}>
                      </InputMask>
              
                     </Form.Group>
    
                    <Form.Group as={Col} md="2">
                    <InputMask required className='form-control text-center'
                        mask='999'
                        placeholder="000" name="code3"   onChange={(e) => setCode5(e.target.value)} value={code5}>
                      </InputMask>
                   
                    </Form.Group>
                  </Row>;
                }else{

                  return null;
                }
               
              })()}

             
              <Button variant="danger" size="lg" type="submit">
                Click Here To Go To  Payment Screen
              </Button>
            </Form>
          </div>
        </div>

        <br />
      </div>

    </>
  );
}

export default FindBogo;