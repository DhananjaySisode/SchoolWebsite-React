import React from 'react'
import { Card } from 'react-bootstrap'

function AddressCard(props) {
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
                <span>{props.contactData.address}</span>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AddressCard
