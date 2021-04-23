import COMMENTS from '../components/data/Comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';

const photoReducer = (photoState = { isLoading: false, photos: [] }, action) => {
    switch (action.type) {
        case actionTypes.PHOTO_LOADING:
            return {
                ...photoState,
                isLoading: true,
                photos: []
            }
        case actionTypes.LOAD_PHOTO:
            return {
                ...photoState,
                isLoading: false,
                photos: action.payload
            }
        default:
            return photoState;
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);
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