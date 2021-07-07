import axios from 'axios';

const authSuccess = (token, userId) => {
    return {
        type: "AUTH_SUCCESS",
        payload: {
            token: token,
            userId: userId
        }
    }
}

export const auth = (email, password, mode) => dispatch => {

    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    let authUrl = null;
    if (mode === "Sign Up") {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
    else {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    const API_KEY = "AIzaSyBHchSDp_Pobb55t0Qa3aJjwk7vl6xj9Ks";
    axios.post(authUrl + API_KEY, authData)
        .then(response => {
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            return response.data;
        })
        .then(data => dispatch(authSuccess(data.idToken, data.localId)))
        .catch(err => {
            // console.log("Something error");
        })
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: "AUTH_LOGOUT",
    }
}

export const authCheck = () => dispatch => {

    const token = localStorage.getItem('token');

    if (!token) {
        dispatch(logout());
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime > new Date()) {
            const userId = localStorage.getItem('userId');

            dispatch(authSuccess(token, userId))
        }
        else {
            dispatch(logout());
        }
    }
}


