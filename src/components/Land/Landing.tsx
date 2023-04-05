import React from 'react';
import './Landing.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Landing() {
    const hero = require('../../Assets/image 10.png');
    const tavern = require('../../Assets/Lets get started.png');
    const card1 = require('../../Assets/Rectangle 6.png');
    const card2 = require('../../Assets/Rectangle 7.png');
    return (
        <div>
            <Row>
                <img src={hero} />
            </Row>
            <Row>
                <Col className='col-5'>
                    <img src={tavern} />
                </Col>
                <Col className='card1'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>An easy way to connect locally with your fellow adventurers</Card.Title>
                            <Card.Text>
                            Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon! 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card2'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>Create the ultimate campaign and let the heroes find you!</Card.Title>
                            <Card.Text>
                            There are heroes near you looking for their next campaign run, or maybe even their first!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}
