import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import LogoImage from '../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter, faPinterestP, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import GooglePlayIcon from '../../Images/Google play icon.png';
import AppStoreIcon from '../../Images/App store icon.png';
import { Link } from 'react-router-dom';


export default function App() {


  return (
    <>
  
    <MDBFooter bgColor='light' className='text-center text-lg-start'>
      <div className='container'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4'>

        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <div className=''>
                  <Link to={process.env.REACT_APP_BASE_URL}>
                    <img src={LogoImage} alt="Logo" width='150' height='150' />
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <div className="social-icon">
                  <h6 className='text-uppercase fw-bold mb-4'>Follow Us On:</h6>
                  <div className="wrapper">
                    <div className='icon'>
                      
                          
                            <Link to="">
                                <span>
                                <FontAwesomeIcon icon={faFacebookF} className="" size={'xs'} />
                                </span>
                            </Link>
                            <Link to="">
                                <span>
                                <FontAwesomeIcon icon={faGooglePlusG} className="" size={'xs'} />
                                </span>
                            </Link>
                            <Link to="">
                                <span>
                                <FontAwesomeIcon icon={faTwitter} className="" size={'xs'} />
                                </span>
                            </Link>
                      
                     
                            <Link to="">
                              <span>
                                <FontAwesomeIcon icon={faPinterestP} className="" size={'xs'} />
                              </span>
                            </Link>
                            <Link to="">
                              <span>
                                <FontAwesomeIcon icon={faVimeoV} className="" size={'xs'} />
                              </span>
                            </Link>
                            <Link to="">
                              <span>
                                <FontAwesomeIcon icon={faMap} className="" size={'xs'} />
                              </span>
                            </Link>
                      
                    </div>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>DOWNLOAD MOBILE APPS</h6>
              <p>
                <Link to={"https://apps.apple.com/in/app/bogomazing/id1620879147"} className='text-reset'>
                  <img src={AppStoreIcon} alt="AppStoreIcon" />
                </Link>
              </p>
              <div className='col'>
                <Link to={"https://play.google.com/store/apps/details?id=com.bogoMazing.app&pli=1"} className='text-reset'>
                  <img src={GooglePlayIcon} alt="GooglePlayIcon" />
                </Link>
              </div>
            </MDBCol>


          </MDBRow>
        </MDBContainer>
      </section>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div>
      <div className='copyright text-center p-4 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023
        <a className='text-reset fw-bold text-decoration-none' >
          BOGOmazing App:
        </a>
        All Rights Reserved.
      </div>
    </div>
    </MDBFooter >
   
    </>
  );
}
