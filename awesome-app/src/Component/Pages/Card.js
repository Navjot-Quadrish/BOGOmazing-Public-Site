import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCollapse } from 'react-collapsed';
import Logo from '../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Card = ({ item }) => {

   
   
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    {console.log(process.env.REACT_APP_BASE_URL+"Menu/"+item.dbsno)}
    return (
        
        <div className='card'>
            <img src={(item.logo === null) ? Logo : item.logo}  width="354" height="300"/>
            <div className='position-relative'>

                <div className="position-absolute bottom-0 p-3">
                    <Col xs={12} sm={4} md={12}>
                        <Link to={process.env.REACT_APP_BASE_URL+"Menu/"+item.dbsno} className='btn rounded-pill btn-color btn-danger'><FontAwesomeIcon icon={faMessage} />&nbsp;Menu Items Available</Link>
                    </Col>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">{item.restname}</h5>
                <p class="card-text">{item.short_description}

                <section {...getCollapseProps()}>{item.long_description}</section></p>

                <a class="text-primary text-decoration-none"
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? 'Read Less<<' : 'Read More>>'}
                </a>
            </div>
        </div>
    )
}

export default Card;