import {Button,Container,Col,Form,Row} from 'react-bootstrap';
import {MDBCol} from 'mdb-react-ui-kit';
import GooglePlayIcon from '../../Images/Google play icon.png';
import AppStoreIcon from '../../Images/App store icon.png';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const PaymentSuccess = () => {
  return (
    <>
    <div className="app">
    <br/>
    <br/>

      <div className="login-form">
      
        <div className="title text-center p-4 mb-4 fs-4">BOGOmazing Payment Status</div> 
        <Container>
        {/*<MDBCol >*/}
          <div className='mx-auto mb-4 text-center'>
              <p className=''>Thank You For Becoming A BOGOmazing Member, A Confirmation Has Been Emailed To The Address Below. <br /> Please Download BOGOmazing By Clicking On Either Link Below</p>
              
                <Link to="https://apps.apple.com/in/app/bogomazing/id1620879147" className='text-reset'>
                    <img src={AppStoreIcon} alt="AppStoreIcon"/>
                </Link>&ensp;&ensp;&ensp;
                <Link to="https://play.google.com/store/apps/details?id=com.bogoMazing.app&pli=1"  className='text-reset'>
                        <img src={GooglePlayIcon}  alt="GooglePlayIcon"/>
                </Link>
              
              {/* <div className='col'>
                
              </div> */}
              </div>

              <Table responsive="xl">
                  
                  <tbody>
                    <tr>
                      <td>BOGOmazing Member #:</td>
                      <td>02-029-00001</td>
                      <td>First name:</td>
                      <td>Angela</td>
                    </tr>
                    <tr>
                      <td>Last name:</td>
                      <td>Brigid</td>
                      <td>Email Address:</td>
                      <td>angelabrigid@yopmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>12345678</td>
                      <td>Sex:</td>
                      <td>Female</td>
                     
                    </tr>
                    <tr>
                      <td>DOB:</td>
                      <td>06/23/1996</td>
                      <td>Phone:</td>
                      <td>433-545-4555</td>
                     
                    </tr>
                    <tr>
                      <td>Card Type:</td>
                      <td>Visa</td>
                      <td>Last 4 Digits:</td>
                      <td>4242</td>
                     
                    </tr>
                    
                  </tbody>
                </Table>
                <p>Card To Be Charged Every 30 Days Until Membership Is Cancelled.</p>
                <Form> 
                  <Form.Check
                      required
                      name="terms"
                      label="You Will Receive Other Special Offers Per Your Request"
                     
                    />
                  </Form>  
            {/*</MDBCol>*/}
            </Container>  
      </div>
    
    <br/>
    <br/>
    </div>
    </>
  )
}

export default PaymentSuccess;
