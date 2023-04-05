import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  const logo = require('./Assets/logo.png');
  const [loggedIn, setLoggedIn] = useState('')
  const props = '';
return(
<div>
      <Container>
        <Row className='navbarBg'>
          <Col className='col-7'>
            <img src={logo} />
          </Col>
          <Col className='navMargin'>
            <p className='doubleFont navText'>Map</p>
          </Col>
          <Col className='navMargin'>
            <p className='doubleFont navText'>FAQs</p>
          </Col>
          <Col>
            <p className='doubleFont navText'>D&D Website</p>
          </Col>
          {
            loggedIn? (
            <Col>
            {/* props.username to display the active user */}
            <p className='doubleFont navText'></p>
            </Col>
            ):(
              <Col>
              <p className='doubleFont navText'>Sign Up/Login</p>
            </Col>
            )
          }
        </Row>
      </Container>
    </div>
);
}

export default App;
