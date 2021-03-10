import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    return (
        <div>
            <Card>
                <CardImg src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle style={{ textAlign: 'center' }}>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price}/-
                        </CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails;