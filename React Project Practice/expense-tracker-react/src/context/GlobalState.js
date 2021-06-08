import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';


//initial State
const initialState = {
    transactions: []
}

// Create Context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {

    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction: deleteTransaction,
            addTransaction: addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}