import React from 'react'
import { Card } from 'react-bootstrap';

function ContactCard(props) {
    return (
        <Card
            bg='Info'
            key={props.contactData.title}
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2">
            <Card.Header style={{fontWeight: 'bold'}}>{props.contactData.title}</Card.Header>
            <Card.Body>
            <Card.Text>
                <h6>{props.contactData.pre}</h6>
                <span>{props.contactData.preText}</span>
                <h6>{props.contactData.primary}</h6>
                <span>{props.contactData.primaryText}</span>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ContactCard;