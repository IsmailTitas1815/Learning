import * as actionTypes from './actionTypes';

export const addComment = (photoId, author, rating, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        photoId: photoId,
        author: author,
        rating: rating,
        comment: comment
    }
})