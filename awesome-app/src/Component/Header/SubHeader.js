import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const SubHeader = () => {
  return (
    <div>
     <Container fluid>
        <Row className="p-5 text-center bg-danger text-white">
          <Col className='fs-2 fw-bold'>Check Out All Of The BOGOmazing App Restaurant Sponsors</Col>
          <br />
          <br />
          <p>Want To Begin Saving $100's Per Month, Just Visit Any Restaurant Listed To Sign Up To Be A BOGOmazing App Member For Only $29.95 Per Month - NO Contract, Cancel Anytime</p>

        </Row>
      </Container>
      <br />
      <br />
    </div>
  )
}

export default SubHeader;

