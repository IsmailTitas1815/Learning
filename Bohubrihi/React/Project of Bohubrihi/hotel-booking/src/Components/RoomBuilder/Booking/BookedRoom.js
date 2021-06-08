import React from 'react';

const BookedRoom = props => {
    const servicesSummary = props.room.services.map(service => {
        return (
            <span
                style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "5px",
                    marginRight: "10px"
                }}
                key={service.type}>
                {service.amount} X <span style={{ textTransform: "capitalize" }}>
                    {service.type}</span> </span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px"
        }}>
            <p>ID: {props.room.id}</p>
            <p>Address: {props.room.guest.address}</p>
            <hr />
            {servicesSummary}
            <hr />
            <p>TotalCost: {props.room.totalCost} BDT</p>
        </div>
    )
}

export default BookedRoom;