import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
//import '../../../node_modules/holderjs/holder';
import backgroundImage from '../../Images/background.jpg'; 


const Testimonial = () => {
  return (
    <div>
        <br/>
      <div id="testimonial" className="about-area spc-small">
      <Container>
      <h3 className="sec-sub-title fw-bolder fs-1"><font color="#FF0000">Testimonials</font></h3>
      <br/>
      </Container>
      <Container>
      <Carousel variant="dark">
      <Carousel.Item interval={100000}>
      
        {/* <div className='w-100 d-flex flex-column justify-content-center align-item-center' style={{backgroundImage:`url(${backgroundImage})`, backgroundPosition:'center', backgroundSize: 'cover',height:'90vh'}}>
     
        </div> */}
        <img
          className="d-block w-100"
          src={backgroundImage} height='400'
          alt="First slide" 
        />
        <Carousel.Caption>
      
        {/* <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={12}> */}
        <div className='d-flex justify-content-center align-items-center h-75'>
        <p className="h6 fw-bold text-dark fs-4"> 
              I want to thank BOGOmazing and all the amazing restaurant sponsors for helping people really struggling with finances the perfect restaurant app that helps stretch what few dollars many people have.  Me and my wife are able to get out a little more and enjoy the quality time immensely. 
        </p>
        </div>
        {/* </Col>
        </Row> */}
        <h3 className="fs-4 m-3">John B,</h3>
       
        
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item interval={100000
      }>
        <img
          className="d-block w-100"
          src={backgroundImage} height='400'
          alt="Second slide"
        />
       
        <Carousel.Caption>
        {/* <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={12}>  */}
        <div className='d-flex justify-content-center align-items-center h-75'>
        <p className="h6 fw-bold text-dark fs-4">
                 As a salesperson who takes clients out to lunch almost daily as well as eating out with my family almost every night, BOGOmazing is saving me around $50 per day which is $1500 per month for the incredibly low $29.95 monthly membership fee.  This is a no brainer restaurant dining app for even someone who dines out once a week but for business people like me, the monthly savings is truly substantial.  
        </p>
        </div>
        {/* </Col>
        </Row> */}
         <h3 className="fs-3 m-3">Edward R</h3>
    
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={backgroundImage} height='400'
          alt="Third slide"
        />
        <Carousel.Caption>
        {/* <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={12}>  text-break */}
        <div className='d-flex justify-content-center align-items-center h-75'>
        <p className="h6 fw-bold text-dark fs-4">
            Being a single mom and trying to raise 3 teenagers is very hard work and super expensive.  Eating out was something I could really not afford to treat my kids to often as it got so expensive by the time all 4 of us ordered what we wanted.  With BOGOmazing getting 2 free menu selections with 2 select entrees is saving around $50 when we go out and has made dining out so much more affordable and less stressful financially
        </p>
        </div>
        {/* </Col>
        </Row> */}
        <h3 className="fs-3 m-3">Carla S</h3>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          
         </Carousel.Caption>
        
      </Carousel.Item> 
    </Carousel>
    </Container>
    </div>
    </div>
  )
}

export default Testimonial;