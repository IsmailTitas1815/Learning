import React from 'react';
import Services from '../Services/Services';
import './RoomService.css';

const RoomService = props => {
    let serviceArr = props.services.map(service => {
        let amountArr = [...Array(service.amount).keys()];
        return amountArr.map(_ => {
            return <Services type={service.type} key={Math.random()} />
        })
    })
        .reduce((arr, element) => {
            return arr.concat(element)
        }, [])
    if (serviceArr.length === 0) {
        serviceArr = <p>Please add any of these Service!</p>;
    }

    return (
        <div className="RoomService">

            {serviceArr}

        </div>
    )
}

export default RoomService; 