import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const PhotoDetails = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg src={props.singleDetails.image}
                    alt="props.singleDetails.name" />
                <CardBody>
                    <CardTitle>{props.singleDetails.name}</CardTitle>
                    <CardText>{props.singleDetails.description}</CardText>
                    <CardText>{props.singleDetails.price}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default PhotoDetails;