import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

export default configureStore({
    middleware: [...getDefaultMiddleware()],
    reducer: {
        user: userReducer
    },
    devTools: process.env.NODE_ENV !== "production",
})