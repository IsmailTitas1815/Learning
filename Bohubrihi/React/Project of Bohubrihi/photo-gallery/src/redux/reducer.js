import IMAGEDETAILS from '../components/data/ImagesDetails';
import COMMENTS from '../components/data/Comments';
import * as actionTypes from './actionTypes';
import { combineReducers } from 'redux';


const photoReducer = (photoState = IMAGEDETAILS, action) => {
    switch (action.type) {
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
    comments: commentReducer
})