import * as actionTypes from './actionTypes';
import axios from 'axios';
import { Base_Url } from './baseUrl';

export const addComment = (photoId, author, rating, comment) => dispatch => {
    const newComment = {
        photoId: photoId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    axios.post(Base_Url + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

const loadPhotos = (photos) => ({
    type: actionTypes.LOAD_PHOTO,
    payload: photos
})

const photosLoading = () => ({
    type: actionTypes.PHOTO_LOADING,
})

const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})
const commentloading = () => ({
    type: actionTypes.COMMENT_LOADING
})

const photosFailed = (errMess) => ({
    type: actionTypes.PHOTOS_FAILED,
    payload: errMess
})

export const fetchPhotos = () => {  //ajax asyncronige
    return dispatch => {
        dispatch(photosLoading());
        axios.get(Base_Url + "ImageDetails")
            .then(response => response.data)
            .then(photos => dispatch(loadPhotos(photos)))
            .catch(error => dispatch(photosFailed(error.message)))

    }
}

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentloading());
        axios.get(Base_Url + "Comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)))

    }
}