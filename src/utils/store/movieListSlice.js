import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: 'movieList',
    initialState:{
        nowPlaying: [],
        popular: [],
        upcoming: [],
        topRated: []
    },
    reducers:{
        addNowPlayingMovieLIst: (state, action)=>{
            state.nowPlaying = action.payload
        },
        addPopularMovieList: (state, action)=>{
            state.popular = action.payload
        },
        addUpcomingMovieList: (state, action)=>{
            state.upcoming = action.payload
        },
        addTopRatedMovieList: (state, action)=>{
            state.topRated = action.payload
        },
        clearMovieData: (state)=>{
            state.nowPlaying = []
            state.popular = []
            state.upcoming = []
            state.topRated = []
        }
    }
})

export const {addNowPlayingMovieLIst,addPopularMovieList,addTopRatedMovieList,addUpcomingMovieList,clearMovieData} = movieListSlice.actions

export default movieListSlice.reducer