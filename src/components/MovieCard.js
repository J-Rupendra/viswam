import React from 'react'
import { TMDP_DEFAULT_POSTED_PATH, TMDP_DEFAULT_POSTER_PATH, TMDP_IMAGE_BASE_URL_CARD_SIZE } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movieDetails}) => {

    const navigateTo = useNavigate()

    function handleCardClick(){
        navigateTo(`/moviePreview/${movieId}`)
    }

    const {poster_path:movieImage, original_title:movieTitle, id:movieId} = movieDetails
  return (
    <div className='w-48 mr-6 mb-4 cursor-pointer hover:scale-110 transition-all' onClick={handleCardClick} >
      <img className='w-full rounded-lg' src={TMDP_IMAGE_BASE_URL_CARD_SIZE+(movieImage || TMDP_DEFAULT_POSTER_PATH)} />
      <p className='text-gray-300 mt-2' >{movieTitle}</p>
    </div>
  )
}

export default MovieCard
