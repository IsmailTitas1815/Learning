import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
    name: "user",
    initialState: {
        users: [
            { id: 1, name: "ismail" },
            { id: 2, name: "titas" },
        ]
    }

})

export default userReducer.reducer;