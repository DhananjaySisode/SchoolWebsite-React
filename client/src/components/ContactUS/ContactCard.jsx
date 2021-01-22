import React from 'react'

function ContactCard(props) {
    return (
        <>
            <h4>{props.contactData.title}</h4>
            <h6>{props.contactData.pre}</h6>
            <span>{props.contactData.preText}</span>
            <h6>{props.contactData.primary}</h6>
            <span>{props.contactData.primaryText}</span>
        </>
    )
}

export default ContactCard;