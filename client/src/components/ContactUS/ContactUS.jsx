import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactData from '../../data/constantData'
import AddressCard from './AddressCard'
import ContactCard from './ContactCard'
import './ContactUS.css';

function ContactUS() {
    return (
        <Container className='conatct-container' fluid="md" style={{padding: '1rem'}}>
            <Row>
                <Col xs lg="4"><ContactCard contactData={contactData.Phone}/></Col>
                <Col xs lg="4"><ContactCard contactData={contactData.Email}/></Col>
                <Col xs lg="4"><AddressCard contactData={contactData.Address}/></Col>
            </Row>
        </Container>
    )
}

export default ContactUS
