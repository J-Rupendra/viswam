import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieLisSlice from "./movieListSlice";
import shortsSlice from "./shortsSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movie: movieLisSlice,
        shorts: shortsSlice
    }
})

export default appStore