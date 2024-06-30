import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import useFetchMovieListCategory from '../utils/custom_hooks/useFetchMovieListCategory'
import { Link, useNavigate } from 'react-router-dom'

const MovieCategory = ({category}) => {
    const categoryMoviesList = useSelector(store => store.movie[category.sliceParam])
    useFetchMovieListCategory(category)
    const navigateTo = useNavigate()



    if(!categoryMoviesList.length){
        return
    }

  return (
    <div className="my-4">
      <div className='flex justify-between' >
        <p className="text-white text-2xl font-semibold">{category.title} </p>
        <Link to={`/movieList/${category.routeParam}`}  ><span className="text-sm bg-teal-500 px-2 mb-2 text-white cursor-pointer">more</span></Link>
        
      </div>
      <div className="flex overflow-x-hidden">
        <div className="mx-2 my-4 flex gap-3">
          {categoryMoviesList.map((_) => (
            <MovieCard key={_.id} movieDetails={_} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCategory
