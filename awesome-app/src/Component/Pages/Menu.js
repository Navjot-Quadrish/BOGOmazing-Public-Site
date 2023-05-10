import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import SubHeader from '../Header/SubHeader';
import DesignImage from '../../Images/btm-style.png';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Menu() {

  const [Menus, setMenus] = useState([]);


  const { id } = useParams();
  useEffect(() => {

    fetch(process.env.REACT_APP_API_URL + `getAllBogoMenus?restid=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "error") {
          toast.error("No Menu Items Found");
          const timeout = setTimeout(() => {
            // toast.error("hello");
            window.location.replace(process.env.REACT_APP_BASE_URL + "SearchRestaurant");

          }, 3000);

          return () => clearTimeout(timeout);

        }

        setMenus(data.data);
        //console.warn(setMenus, "hello baby")
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <>

      <ToastContainer />
      <SubHeader />
      <h1 className='text-center fw-bolder'>SEARCH RESULTS</h1>
      <div className="hr-theme-slash-2">
        <div className="hr-line"></div>
        <div className="hr-icon"><i className="material-icons"> <img className="center" src={DesignImage} alt="DesignImage" /></i></div>
        <div className="hr-line"></div>
      </div>

      <br />
      <br />
      <Container className='d-flex justify-content-center'>
        <Table striped bordered hover className='w-75'>
          <thead>
            <tr className='bg-danger text-white'>
              <th>Category</th>
              <th>Menu Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>BOGO</th>
              <th>2nd</th>
              <th>Full</th>
            </tr>
          </thead>
          <tbody>

            {Menus.map((item, index) =>

              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.MenuName}</td>
                <td>{item.descr}</td>
                <td>{"$"+item.Amount.toFixed(2)}</td>
                <td>{item.offertype.split(",").includes("1") == true ? <div className="text-center text-success"><FontAwesomeIcon icon={faCheck} className="me-4" size={"1x"} /></div> : <div className="text-center text-danger"><FontAwesomeIcon icon={faTimes} className="me-4" size={"1x"} /></div>}</td>
                <td>{item.offertype.split(",").includes("2") == true ? <div className="text-center text-success"><FontAwesomeIcon icon={faCheck} className="me-4" size={"1x"} /></div> : <div className="text-center text-danger"><FontAwesomeIcon icon={faTimes} className="me-4" size={"1x"} /></div>}</td>
                <td>{item.offertype.split(",").includes("3") == true ? <div className="text-center text-success"><FontAwesomeIcon icon={faCheck} className="me-4" size={"1x"} /></div> : <div className="text-center text-danger"><FontAwesomeIcon icon={faTimes} className="me-4" size={"1x"} /></div>}</td>
              </tr>

            )}
            <br />
            <br />
            
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Menu;