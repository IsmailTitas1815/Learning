import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { Base_Url } from '../../redux/baseUrl';

const Photo = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg src={Base_Url + props.singleDetails.image}
                        alt={props.singleDetails.name}
                        style={{
                            height: "300px",
                            opacity: "0.8"
                        }} />
                    <CardImgOverlay>
                        <CardTitle onClick={props.ImageSelect}
                            style={{ cursor: "pointer" }}
                        >
                            {props.singleDetails.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default Photo;