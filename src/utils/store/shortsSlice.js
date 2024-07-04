import { createSlice } from "@reduxjs/toolkit";

const shortsSlice = createSlice({
    name: "shorts",
    initialState:{
        ShortsList: []
    },
    reducers:{
        addShorts(state,action){
            state.ShortsList = action.payload
        }
    }
})

export const {addShorts} = shortsSlice.actions
export default shortsSlice.reducer