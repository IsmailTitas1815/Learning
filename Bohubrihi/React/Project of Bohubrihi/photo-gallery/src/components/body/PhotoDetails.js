import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';

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
                    <LoadComments comments={props.comments} />
                </CardBody>
                <CommentForm addComment={props.addComment} photoId={props.singleDetails.id} />
            </Card>
        </div>
    )
}

export default PhotoDetails;