import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import reactIcon from '../assets/images/logo192.png'

function Footer() {

    return (
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md='50%' sm='50%'>
                        Built with React<img className='r-icon' src={reactIcon} alt={reactIcon} />
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md='50%' >
                        Created by Jonathan Nuno
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer