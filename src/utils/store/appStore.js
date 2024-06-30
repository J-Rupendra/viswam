import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieLisSlice from "./movieListSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movie: movieLisSlice
    }
})

export default appStore