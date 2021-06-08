import { authSlice } from './slice';

const { actions: slice } = authSlice;


export const LoginAction = (phone) => {
    return (slice.setLogin(phone))
};

export const LogoutAction = () => {
    return (slice.setLogout())
}

export const GetDataAction = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            dispatch(slice.setData(json))
        })
        .catch(err => console.log(err))
}