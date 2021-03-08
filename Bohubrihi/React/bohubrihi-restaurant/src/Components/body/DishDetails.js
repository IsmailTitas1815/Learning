import React from 'react';
import { Card, CardText, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';


const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: '10px' }}>
                <CardImg src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>
                            {props.dish.description}
                        </p>
                        <p>Price:
                    {props.dish.price}
                        </p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;