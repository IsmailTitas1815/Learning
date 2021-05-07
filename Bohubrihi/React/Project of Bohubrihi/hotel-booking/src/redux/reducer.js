import RoomsData from '../Components/Data/RoomData';
import * as actionTypes from './actionTypes';
const InitialState = {
    roomsDetails: RoomsData,
    services: [
        { type: 'kuli', amount: 0 },
        { type: 'pool', amount: 0 },
        { type: 'khabar', amount: 0 },
        { type: 'call', amount: 0 }
    ],
    totalCost: 80,
    purchasable: false,
    bookedRoom: [],
    bookedRoomLoading: true,
    bookedRoomErr: false,
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null
}

const Services_price = {
    kuli: 20,
    pool: 60,
    khabar: 30,
    call: 20
}

export const Reducer = (state = InitialState, action) => {
    const services = [...state.services];
    switch (action.type) {
        case actionTypes.ADD_SERVICE:
            for (let item of services) {
                if (item.type === action.payload) {
                    item.amount++;
                }
            }
            return {
                ...state,
                services: services,
                totalCost: state.totalCost + Services_price[action.payload]
            }
        case actionTypes.REMOVE_SERVICE:
            for (let item of services) {
                if (item.type === action.payload && item.amount > 0) {
                    item.amount--;
                }
            }
            return {
                ...state,
                services: services,
                totalCost: state.totalCost - Services_price[action.payload]
            }

        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.services.reduce((sum, element) => {
                return sum + element.amount;
            }, 0);
            return {
                ...state,
                purchasable: sum > 0
            }
        case actionTypes.RESET_BOOKING:
            return {
                ...state,
                roomsDetails: RoomsData,
                services: [
                    { type: 'kuli', amount: 0 },
                    { type: 'pool', amount: 0 },
                    { type: 'khabar', amount: 0 },
                    { type: 'call', amount: 0 }
                ],
                totalCost: 80,
                purchasable: false
            }
        case actionTypes.LOAD_BOOKED_ROOM:
            let rooms = [];
            for (let key in action.payload) {
                rooms.push({
                    ...action.payload[key],
                    id: key
                });
            }
            return {
                ...state,
                bookedRoom: rooms,
                bookedRoomLoading: false,
            }
        case actionTypes.BOOKED_ROOM_LOADING_FAILED:
            return {
                ...state,
                bookedRoomLoading: false,
                bookedRoomErr: true,
            }
        //Auth Cases
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                authFailedMsg: null
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload
            }
        default:
            return state;
    }
}

