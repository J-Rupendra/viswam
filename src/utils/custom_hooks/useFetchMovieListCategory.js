import { useEffect } from "react"
import { TMDB_MOVIE_LIST_API, TMDP_API_OPTIONS } from "../constants"
import { useDispatch } from "react-redux"

const useFetchMovieListCategory =  (paramObj)=>{

    const dispatch = useDispatch()
    useEffect(()=>{

        fetchPopularMovies()
    },[])

    async function fetchPopularMovies(){
        const fetchUrl = TMDB_MOVIE_LIST_API.replace("[#category]",paramObj.apiParam).replace("[#page_number]",1)
        const response = await fetch(fetchUrl,TMDP_API_OPTIONS)
        const respJson = await response.json()
        const actionToBeDispatched = paramObj.action
        dispatch(actionToBeDispatched(respJson?.results))
    }   

}

export default useFetchMovieListCategory