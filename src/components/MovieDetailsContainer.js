import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import { TMDP_API_OPTIONS, TMDP_DEFAULT_BACKDROP_PATH, TMDP_IMAGE_BASE_URL_DASHBOARD_SIZE } from '../utils/constants'
import VideoPlayContainer from './VideoPlayContainer'
import useScrollToTop from '../utils/custom_hooks/useScrollToTop'

const MovieDetailsContainer = () => {

    useCustomRouteGaurd()
    const {movieId} = useParams()
    const [movieContent, setMovieContent] = useState(null)
    const [videosList, setVideosList] = useState([])
    const [videoId, setVideoId] = useState(null)
    useScrollToTop()

    useEffect(()=>{
        fetchMovieContent()
        fetchMovieVideos()
    },[])

    async function fetchMovieContent(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, TMDP_API_OPTIONS)
        const respJson = await response.json()
        setMovieContent(respJson)
    }

    async function fetchMovieVideos(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,TMDP_API_OPTIONS)
        const respJson = await response.json()
        setVideosList(respJson?.results)
    }

    if(!movieContent){
        return
    }

    const {backdrop_path: moviePoster , genres, original_title:movieName, overview:movieDescription} = movieContent

    function getVideoId(flag){
        for(const video of videosList){
            if(video.site === "YouTube" && video.type === flag){
                return video.key
            }
        }
        return null
    }

    function handleWatchButtonClick(videoType){
        const returnedVideoKey = getVideoId(videoType)
        if(returnedVideoKey !== videoId){
            setVideoId(returnedVideoKey)
        }
    }

  return (
    <div className="p-6 h-full">
      <div className="flex gap-20 divide-teal-400 divide-x-4 ">
        {videoId ? (
          <VideoPlayContainer videoId={videoId} />
        ) : (
          <img
            className="w-3/5"
            src={
              TMDP_IMAGE_BASE_URL_DASHBOARD_SIZE +
              (moviePoster || TMDP_DEFAULT_BACKDROP_PATH)
            }
          />
        )}
        <div className={"px-4 text-center w-2/5 " + (videoId ? "" : "pt-8")}>
          <p className="text-6xl text-white font-mono my-8">{movieName}</p>
          {videoId && (
            <button
              className="bg-teal-400 text-black font-semibold text-2xl px-4 py-2 w-3/5 my-1"
              onClick={() => setVideoId(null)}
            >
              Poster
            </button>
          )}
          <button
            className="bg-gray-400 text-white font-semibold text-3xl px-4 py-2 w-3/5 my-4"
            onClick={() => handleWatchButtonClick("Trailer")}
          >
            Watch Trailer
          </button>
          <button
            className="bg-teal-400 text-black font-semibold text-3xl px-4 py-2 w-3/5 my-4"
            onClick={() => handleWatchButtonClick("Teaser")}
          >
            Watch Movie
          </button>
          {genres.length > 0 && (
            <div className="bg-gray-700 w-3/5 text-left p-2 mt-4 mx-auto">
              <p className="text-white text-2xl mb-2">Genre</p>
              <ul className="px-8 text-gray-400 text-xl list-disc ">
                {genres.map((_) => (
                  <li key={_.id}> {_.name} </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="text-white text-4xl mb-2 mt-6">Overview</p>
      <p className="text-gray-300 text-xl mx-4 my-4">{movieDescription}</p>
    </div>
  );
}

export default MovieDetailsContainer
