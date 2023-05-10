import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// ImageMapper from 'react-image-mapper';
import Image from '../../Images/Slide-1.jpg';
import Image1 from '../../Images/Slide-2.jpg';
import Image2 from '../../Images/Slide-3.jpg';
import Image3 from '../../Images/Slide-4.jpg';
import Image4 from '../../Images/Slide-5.jpg';
import Image5 from '../../Images/Slide-6.jpg';
import Image6 from '../../Images/Slide-7.jpg';
import {Link} from 'react-router-dom';



// let AREAS_MAP ={
//     "id" :  "469f9800-c45a-483f-b13e-bd24f3fb79f4",
//     "title": "Hardwood",
//     "shape": "rect",
//     "name": "1",
//     "fillColor": "#eab54d4d",
//     "strokeColor": "black",
//     "coords": [
//       724,761,731,748 
//     ],
// }

const ImageCarousel = () => {
  return(
    // console.log(AREAS_MAP),
    <>
     {/* <img
          className="d-block w-100"
          src={Image}
          alt="First slide" useMap='map'
        /> */}
        {/* <ImageMapper src={Image} href="/Signup" map={AREAS_MAP}/> */}
         {/* <map name='#map'>
         <area shape="rect" coords="724,761,731,748" title="Ractangle" href="/Signup"/>       
         </map>  */}
    <Carousel>
      <Carousel.Item interval={2000}>
      <Link to={process.env.REACT_APP_BASE_URL+"Signup"}>
        <img
          className="d-block w-100"
          src={Image}
          alt="First slide" 
        />
        </Link>
         {/* useMap='map' <map name='#map'>
            <area alt="" title="" href="/Signup" shape="rect" coords="327,676,731,770" />
        </map>  */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Link to={process.env.REACT_APP_BASE_URL+"Signup"}>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Second slide"
        />
      </Link>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
        <a></a>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
    
        <img
          className="d-block w-100"
          src={Image4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Image5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Link to={process.env.REACT_APP_BASE_URL+"Signup"}>
        <img
          className="d-block w-100"
          src={Image6}
          alt="Third slide"
        />
        </Link>
      </Carousel.Item>
    </Carousel>
    </>
  )
}



export default ImageCarousel; 
