import { Container, Row, Col,  } from "react-bootstrap"
import React from 'react'



export default function TavernBoard () {

 const logo = require('../Assets/logo1.jpg');

  return (
    <Container>
      <Row>
        <Col>
          <div className='title-container'>
            <div className='image-container'>
              <img src={logo} alt='logo' className='logo-image' />
              <div className='text-overlay'>
                <h1 className='text'>The Tavern Board</h1>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className='d-flex justify-content-end'>
            <button className='button mr-2'>My Location</button>
            <button className='button'>Filter</button>
            <button className='button'>BackButton</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


