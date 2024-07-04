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
        addNowPlayingMovieList: (state, action)=>{
            state.nowPlaying = [...state.nowPlaying,...action.payload]
        },
        addPopularMovieList: (state, action)=>{
            state.popular = [ ...state.popular,...action.payload]
        },
        addUpcomingMovieList: (state, action)=>{
            state.upcoming = [ ...state.upcoming,...action.payload]
        },
        addTopRatedMovieList: (state, action)=>{
            state.topRated = [ ...state.topRated,...action.payload]
        },
        clearMovieData: (state)=>{
            state.nowPlaying = []
            state.popular = []
            state.upcoming = []
            state.topRated = []
        },
        getMovieListFor: (state, action)=>{
            state[action.payload] = [...state[action.payload]]
        }
    }
})

export const {addNowPlayingMovieList,addPopularMovieList,addTopRatedMovieList,addUpcomingMovieList,clearMovieData, getMovieListFor} = movieListSlice.actions

export default movieListSlice.reducer