import React from 'react';
import Logo from '../../Images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

 const List = (props) => {
  return(
    <>
        <header>
        {/* <Navbar bg="dark" expand="lg" variant="dark">
      
      <Container>
          <Fonts />
          <Nav className="me-auto"> 
            <Row>
              <Col className='col-md-12'></Col>
              <Col className='col-md-12'>
                  <Nav.Link className="search-restaurantlink fs-5 fw-bolder" to="/searchrestaurant">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Search For Restaurants</Nav.Link>
              </Col>
            </Row>
          </Nav>

      </Container>
    </Navbar> */}

    
        <Navbar className='navbar-headers' expand="lg">
      
      <Container>
        <Link to={process.env.REACT_APP_BASE_URL}><img src={Logo} alt="logo" width ='60' height='60' className=''/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        <Col className='col-md-2'></Col>
            <Col className='col-md-8'>
              <Nav className="me-auto fw-bolder fs-6 buttonsize">
                <Nav.Link className='navbar-customlinks text-decoration-none' href={process.env.REACT_APP_BASE_URL+"#BogomazingApp"}>ABOUT BOGOMAZING APP</Nav.Link>
                <Nav.Link className='navbar-customlinks' href={process.env.REACT_APP_BASE_URL+"#Q-A"} >Q&A</Nav.Link>
                <Link className='navbar-customlinks text-decoration-none' to={process.env.REACT_APP_BASE_URL+"Signup"}>SIGNUP</Link>
                <Nav.Link className='navbar-customlinks' href={process.env.REACT_APP_BASE_URL+"#testimonial"}>TESTIMONIALS</Nav.Link>
                <Link className='btn search-restaurantlink ms-2 text-decoration-none' to={process.env.REACT_APP_BASE_URL+"SearchRestaurant"}>Search For Restaurants</Link>
            {/* <Button className="search-restaurantlink ms-2" ></Button> */}
 
              </Nav>
            </Col>
        </Navbar.Collapse>
   
      </Container>
    </Navbar>
        </header>
    </>
  )
}
export default List;
