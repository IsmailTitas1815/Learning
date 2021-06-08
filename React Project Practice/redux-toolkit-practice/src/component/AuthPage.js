import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../redux/actions';

const AuthPage = () => {
    const [phone, setPhone] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Please Login</h3>
            <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone number" />
            <button onClick={() => dispatch(LoginAction(phone))}>Login</button>
        </div>
    )
}

export default AuthPage;
