import React from 'react'

function AddressCard(props) {
    return (
        <>
            <h4>{props.contactData.title}</h4>
            <span>{props.contactData.address}</span>
        </>
    )
}

export default AddressCard
