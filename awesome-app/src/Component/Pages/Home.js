import React from 'react';
//import {Routes ,Route , Navigate} from 'react-router-dom';
//import Home from './Component/Home';
//import About from './Component/About';
//import Header from './Component/Header/Header';
import Carousel from "../Carousal/Carousel";
import  AverageCalculation from './AverageCalculation';
import  QA from './QA';
import Testimonial from '../Carousal/Testimonial';

// import {Link} from 'react-router-dom';

const Home=()=>{

    return (
        
        <>


         {/* <Error/> */}



        <Carousel/>
        <AverageCalculation/>
        <Testimonial/>
        <QA/>
       
        {/* <h1>Home Component</h1> */}
        </>
    )
}

export default Home;