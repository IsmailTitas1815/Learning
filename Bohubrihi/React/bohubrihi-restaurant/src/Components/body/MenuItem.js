import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';


const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg src={props.dish.image} width="100%"
                        alt={props.dish.name}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle
                            onClick={props.DishSelect}
                            style={{ cursor: "pointer" }}>
                            {props.dish.name}

                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}


export default MenuItem;