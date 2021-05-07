import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addService = stype => {
    return {
        type: actionTypes.ADD_SERVICE,
        payload: stype,
    }
}
export const removeService = stype => {
    return {
        type: actionTypes.REMOVE_SERVICE,
        payload: stype,
    }
}
export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const reset_booking = () => {
    return {
        type: actionTypes.RESET_BOOKING
    }
}

const load_booked_room = rooms => {
    return {
        type: actionTypes.LOAD_BOOKED_ROOM,
        payload: rooms
    }
}
const booked_room_loading_failed = () => {
    return {
        type: actionTypes.BOOKED_ROOM_LOADING_FAILED,
    }
}


export const fetchBooking = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://hotel-booking-8aa77-default-rtdb.firebaseio.com/booking.json?auth=' + token + queryParams)
        .then(response => {
            dispatch(load_booked_room(response.data));
        })
        .catch(err => {
            dispatch(booked_room_loading_failed());
        })
}

