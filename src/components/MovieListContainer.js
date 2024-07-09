import React, { useEffect, useRef } from 'react'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import { useNavigate, useParams } from 'react-router-dom'
import { MOVIE_CATEGORY_LABELS, TMDB_MOVIE_LIST_API, TMDP_API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import useScrollToTop from '../utils/custom_hooks/useScrollToTop'
import Shimmer from './Shimmer'

const MovieListContainer = () => {

    useCustomRouteGaurd()
    const {category} = useParams()
    const navigateTo = useNavigate()
    useScrollToTop()
    const elementToBeObserved = useRef(null)
    const displayingPageNo = useRef(1)
    const dispatch = useDispatch()


    useEffect(() => {
      if (!categoryMoviesList.length) {
        navigateTo("/browse");
      }

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchMoreMovies();
          }
        });
      });
      intersectionObserver.observe(elementToBeObserved.current);
      return () =>
        elementToBeObserved?.current &&
        intersectionObserver.unobserve(elementToBeObserved.current);
    }, []);

    

    const categoryMoviesList = useSelector(store => store.movie[MOVIE_CATEGORY_LABELS[category].sliceParam])

    async function fetchMoreMovies(){
      const response = await fetch(TMDB_MOVIE_LIST_API.replace("[#category]",MOVIE_CATEGORY_LABELS[category].apiParam).replace("[#page_number]",++displayingPageNo.current),TMDP_API_OPTIONS)
      const respJson = await response.json()
      dispatch(MOVIE_CATEGORY_LABELS[category].action(respJson.results))
    }



  return (
    <div className="px-6 py-8 pr-2 ">
      <p className="text-4xl mb-8 text-white font-semibold">
        {MOVIE_CATEGORY_LABELS[category].title}
      </p>
      <div className=" flex flex-wrap">
        {categoryMoviesList.map((_, index) => (
          <MovieCard key={_.id + "_" + displayingPageNo.current+"_"+index} movieDetails={_} />
        ))}
      </div>
        {displayingPageNo.current < 6 && (
          <>
          <span ref={elementToBeObserved}></span>
          <div className='flex flex-wrap' >
            <Shimmer count={6} />
          </div>
          </>
        )}
    </div>
  );
}

export default MovieListContainer
