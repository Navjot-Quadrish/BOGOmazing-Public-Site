import React from 'react';
import Carousel from "../Carousal/Carousel";
import AverageCalculation from './AverageCalculation';
import QA from './QA';
import Testimonial from '../Carousal/Testimonial';



const Home = () => {

    return (

        <>
            <div>
                <Carousel />
                <AverageCalculation />
                <Testimonial />
                <QA />
            </div>

        </>
    )
}

export default Home;