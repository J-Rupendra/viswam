import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        userData:null
    },
    reducers:{
        addUserDetails: (state, action) => {
            state.userData = action.payload
        },
        removeUserDetails: (state) => {
            state.userData=null
        }
    }
})

export const {addUserDetails, removeUserDetails} = userSlice.actions
export default userSlice.reducer