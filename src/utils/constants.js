import { addNowPlayingMovieList, addPopularMovieList, addTopRatedMovieList, addUpcomingMovieList } from "./store/movieListSlice"

export const TMDP_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
  }

export const TMDP_IMAGE_BASE_URL_CARD_SIZE = "https://image.tmdb.org/t/p/w500"
export const TMDP_IMAGE_BASE_URL_DASHBOARD_SIZE = "https://image.tmdb.org/t/p/w780"
export const TMDP_DEFAULT_POSTER_PATH="/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
export const TMDP_DEFAULT_BACKDROP_PATH="/lOKQYk0IHZ3U6y1USV8dL3StXaE.jpg"

// replace the place holder (#---) before using this constants
export const TMDB_MOVIE_LIST_API = "https://api.themoviedb.org/3/movie/[#category]?language=en-US&page=[#page_number]"

export const MOVIE_CATEGORY_LABELS = {
  nowPlaying:{
    title: "Now Playing",
    apiParam: "now_playing",
    action: addNowPlayingMovieList,
    sliceParam: "nowPlaying",
    routeParam: "nowPlaying"
  },
  popular:{
    title: "Popular",
    apiParam: "popular",
    action: addPopularMovieList,
    sliceParam: "popular",
    routeParam: "popular"
  },
  upcoming:{
    title: "Upcoming",
    apiParam: "upcoming",
    action: addUpcomingMovieList,
    sliceParam: "upcoming",
    routeParam: "upcoming"
  },
  topRated:{
    title: "Top Rated",
    apiParam: "top_rated",
    action: addTopRatedMovieList,
    sliceParam: "topRated",
    routeParam: "topRated"
  },
}