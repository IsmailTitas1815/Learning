import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const RoomDetails = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg src={props.room.image}
                    alt="props.room.name" />
                <CardBody>
                    <CardTitle>{props.room.name}</CardTitle>
                    <hr />
                    <CardText>{props.room.description}</CardText>
                    <hr />
                    <CardText>{props.room.price}</CardText>
                    <hr />
                </CardBody>
            </Card>
        </div>
    )
}

export default RoomDetails;