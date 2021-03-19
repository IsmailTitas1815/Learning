const redux = require('redux');


const initState = {
    num: 1
}

const rootReducer = (state = initState, action) => {
    if (action.type === "INC_NUM") {
        return {
            ...state,
            num: state.num + 1
        }
    }
    else if (action.type === "ADD_NUM") {
        return {
            ...state,
            num: state.num + action.value
        }
    }
    else if (action.type === "DEC_NUM") {
        return {
            ...state,
            num: state.num - action.value
        }
    }
    return state;
}


const store = redux.createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
}
)

store.dispatch({
    type: 'INC_NUM'
})

store.dispatch({
    type: "ADD_NUM",
    value: 34
})

store.dispatch({
    type: 'DEC_NUM',
    value: 10
})