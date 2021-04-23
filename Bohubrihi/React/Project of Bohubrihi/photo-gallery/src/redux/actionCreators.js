import * as actionTypes from './actionTypes';
import IMAGEDETAILS from '../components/data/ImagesDetails';

export const addComment = (photoId, author, rating, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        photoId: photoId,
        author: author,
        rating: rating,
        comment: comment
    }
})
const loadPhotos = (photos) => ({
    type: actionTypes.LOAD_PHOTO,
    payload: photos
})

const photosLoading = () => ({
    type: actionTypes.PHOTO_LOADING,
})

export const fetchPhotos = () => {  //ajax asyncronige
    return dispatch => {
        dispatch(photosLoading());
        setTimeout(() => {
            dispatch(loadPhotos(IMAGEDETAILS))
        }, 2000);
        
    } 
}
