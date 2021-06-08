import React, { useEffect } from 'react';
import { LogoutAction, GetDataAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const BasePage = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    useEffect(() => {
        dispatch(GetDataAction())
    }, []);

    return (
        <div>
            <h3>Welcome</h3>
            <h2>{auth.phone}</h2>
            <p>{auth.data.title}</p>
            <p>{auth.data.id}</p>
            <button onClick={() => dispatch(LogoutAction())}>LogOut</button>
        </div>
    )
}

export default BasePage;
