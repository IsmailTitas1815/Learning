import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const Room = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg src={props.room.image}
                        alt={props.room.name}
                        style={{
                            height: "150px",
                            opacity: "0.8",
                        }} />
                    <CardImgOverlay>
                        <CardTitle onClick={props.roomSelect} style={{
                            color: "white",
                            background: "black",
                            textAlign: "center",
                            cursor: "pointer"
                        }}
                        >
                            {props.room.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default Room;