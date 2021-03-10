import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg src={props.dish.image} width="100%"
                        alt={props.dish.name}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle onClick={props.selectedDish} style={{cursor:'pointer'}}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}


export default MenuItem;