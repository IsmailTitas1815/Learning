import axios from 'axios';


const orderSuccess = (orders) => {
    return {
        type: "LOAD_ORDERS",
        payload: orders
    }
}


export const fetchOrder = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://redux-store-97923-default-rtdb.firebaseio.com/order.json?auth=' + token + queryParams)

        .then(response => {
            dispatch(orderSuccess(response.data));
        })
        .catch(err => {
            console.log("err.messege");
        })
}