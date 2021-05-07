import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
import { Base_Url } from '../../redux/baseUrl';

const PhotoDetails = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg src={Base_Url + props.singleDetails.image}
                    alt="props.singleDetails.name" />
                <CardBody>
                    <CardTitle>{props.singleDetails.name}</CardTitle>
                    <hr />
                    <CardText>{props.singleDetails.description}</CardText>
                    <hr />
                    <CardText>{props.singleDetails.price}</CardText>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading} />
                    <hr />
                    <CommentForm addComment={props.addComment} photoId={props.singleDetails.id} />
                </CardBody>
            </Card>
        </div>
    )
}

export default PhotoDetails;