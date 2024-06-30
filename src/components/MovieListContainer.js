import React, { useEffect } from 'react'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import { useNavigate, useParams } from 'react-router-dom'
import { MOVIE_CATEGORY_LABELS } from '../utils/constants'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieListContainer = () => {

    useCustomRouteGaurd()
    const {category} = useParams()
    const categoryMoviesList = useSelector(store => store.movie[MOVIE_CATEGORY_LABELS[category].sliceParam])
    const navigateTo = useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0)
        if(!categoryMoviesList.length){
            navigateTo("/browse")
        }
    },[])

  return (
    <div className='px-6 py-8' >
        <p className='text-4xl mb-8 text-white font-semibold' >{MOVIE_CATEGORY_LABELS[category].title}</p>
      <div className=" flex flex-wrap gap-3">
        {categoryMoviesList.map((_) => (
          <MovieCard key={_.id} movieDetails={_} />
        ))}
      </div>
    </div>
  );
}

export default MovieListContainer
