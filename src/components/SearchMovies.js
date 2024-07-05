import React, { useEffect, useRef, useState } from 'react'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import { TMDP_API_OPTIONS } from '../utils/constants'
import { addDebounce } from '../utils/utilityFunctions'
import MovieCard from './MovieCard'
import Shimmer from './Shimmer'
import useDebounce from '../utils/custom_hooks/useDebounce'

const SearchMovies = () => {
    useCustomRouteGaurd()

    const [searchKeywordResults, setSearchKeywordResults] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [showLoading, setShowLoading] = useState(false)
    const searchInputRef = useRef(null)
    const debouncedFetchSuggestions = useDebounce(fetchSuggestions,500)

    async function fetchSuggestions(searchKeyword){
      console.log("called");
        const response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${searchKeyword}&page=1`, TMDP_API_OPTIONS)
        const respJson = await response.json()
        setSearchKeywordResults(respJson.results)
    }

    async function fetchMovieWithName(movieName){
      setShowLoading(true)
      searchInputRef.current.value = movieName
      setSearchKeywordResults([])
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, TMDP_API_OPTIONS)
      const respJson = await response.json()
      console.log("searched movies::",respJson?.results)
      setShowLoading(false)
      setSearchedMovies(respJson?.results)
    }

    
  return (
    <div className="">
      <div className="relative overflow-visible h-28 mx-auto w-1/3">
        <input
          ref={searchInputRef}
          className=" w-full rounded-lg px-6 py-3 mx-auto my-12 bg-gray-300 border border-red-500"
          onKeyUp={(e) => debouncedFetchSuggestions(e.target.value)}
          onFocus={(e) =>
            e.target.value.length && fetchSuggestions(e.target.value)
          }
          placeholder="Search any video or movie"
        />
        <ul className="absolute top-24 z-20 max-h-72 overflow-y-auto bg-gray-300 px-2 rounded-md w-full divide-y-2 divide-gray-400 ">
          {searchKeywordResults.length > 0 &&
            searchKeywordResults.map((_) => (
              <li
                key={_.id}
                className="p-2 font-semibold cursor-pointer"
                onClick={() => fetchMovieWithName(_.name)}
              >
                {_.name}
              </li>
            ))}
        </ul>
      </div>
      {searchedMovies.length > 0 && (
        <div className="flex flex-wrap py-4 pl-2 g-2">
          {searchedMovies.map((_) => (
            <MovieCard key={_.id} movieDetails={_} />
          ))}
        </div>
      )}
      <div className="flex flex-wrap py-4 pl-2 g-2">
        {showLoading && <Shimmer count={20} />}
      </div>
    </div>
  );
}

export default SearchMovies
