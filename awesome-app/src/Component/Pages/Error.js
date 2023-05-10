import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../../Images/404image.png';
const Error = () => {

  return(
    <>
    {/* <h1>404... Page Not Found</h1> */}
    <img
          className="d-block w-100"
          src={Image}
          alt="Third slide"
          height="500px"
        />
      <div className='text-center'>
      {/* <h5>404... PAGE NOT FOUND </h5> */}
      <h5>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST. </h5>
      <Link className='btn btn-success rounded-pill' to={process.env.REACT_APP_BASE_URL}>Return To Home Page</Link>
      </div>
      
      <br/>
        </>
  )
}
export default Error;
