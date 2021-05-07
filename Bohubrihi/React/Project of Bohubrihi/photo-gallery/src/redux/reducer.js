import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';

const photoReducer = (photoState = { isLoading: false, photos: [], errMess: null }, action) => {
    switch (action.type) {
        case actionTypes.PHOTO_LOADING:
            return {
                ...photoState,
                isLoading: true,
                photos: [],
                errMess: null
            }
        case actionTypes.LOAD_PHOTO:
            return {
                ...photoState,
                isLoading: false,
                photos: action.payload,
                errMess: null
            }
        case actionTypes.PHOTOS_FAILED:
            return {
                ...photoState,
                isLoading: false,
                photos: [],
                errMess: action.payload
            }
        default:
            return photoState;
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }

        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
}

export const Reducer = combineReducers({
    imageDetails: photoReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})