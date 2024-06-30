import { useDispatch } from 'react-redux'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import { useEffect } from 'react'
import { addUserDetails } from '../utils/store/userSlice'
import { getSessionStorage } from '../utils/browserStorageMethods'
import MovieCategory from './MovieCategory'
import { MOVIE_CATEGORY_LABELS } from '../utils/constants'

const Browse = () => {

  useCustomRouteGaurd()


  return (
    <div className='w-full h-full p-6' >
      <MovieCategory category={MOVIE_CATEGORY_LABELS.popular} />
      <MovieCategory category={MOVIE_CATEGORY_LABELS.nowPlaying} />
      <MovieCategory category={MOVIE_CATEGORY_LABELS.upcoming} />
      <MovieCategory category={MOVIE_CATEGORY_LABELS.topRated} />
    </div>
  )
}

export default Browse
