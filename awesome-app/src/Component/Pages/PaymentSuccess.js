import React from 'react';
import {MDBCol} from 'mdb-react-ui-kit';
import GooglePlayIcon from '../../Images/Google play icon.png';
import AppStoreIcon from '../../Images/App store icon.png';
import {Link} from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <>
    <div className="app">
    <br/>


      <div className="login-form w-50">
        <div className="title text-center p-4 mb-4 fs-4">BOGOmazing Payment Status</div> 
       
        <MDBCol className='mx-auto mb-4 text-center'>
              <h4 className=''>Payment Process Successfully</h4>
              <p>
                <Link to="https://apps.apple.com/in/app/bogomazing/id1620879147" className='text-reset'>
                    <img src={AppStoreIcon} alt="AppStoreIcon"/>
                </Link>&ensp;&ensp;&ensp;
                <Link to="https://play.google.com/store/apps/details?id=com.bogoMazing.app&pli=1"  className='text-reset'>
                        <img src={GooglePlayIcon}  alt="GooglePlayIcon"/>
                </Link>
              </p>
              {/* <div className='col'>
                
              </div> */}
            </MDBCol>
        
      </div>
    
    <br/>

    </div>
    </>
  )
}

export default PaymentSuccess;
