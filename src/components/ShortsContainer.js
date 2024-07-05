import React, { useEffect, useRef, useState } from 'react'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import useThrottling from '../utils/custom_hooks/useThrottling'
import { SHORT_VIDEOS_ID_LIST } from '../utils/constants'

const ShortsContainer = () => {
    useCustomRouteGaurd()
    
    const listOfShortVideos = useRef(SHORT_VIDEOS_ID_LIST) 
    const [shortIndexToPlay, setShortIndexToPlay] = useState(-1)
    const throttledShortNavigateClick = useThrottling(shortNavigateClick, 1200)  // the avg time taken to load a youtube short is 1200ms
    useEffect(()=>{
        shuffleShorts()
        setShortIndexToPlay(0)
    },[])


    function shortNavigateClick(flag){
        const indexToBeUpdated = shortIndexToPlay+flag
        setShortIndexToPlay(indexToBeUpdated<=0?0:indexToBeUpdated)
    }

    

    function shuffleShorts() {
      for (let i = listOfShortVideos.current.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (listOfShortVideos.current.length));
        [listOfShortVideos.current[i], listOfShortVideos.current[j]] = [listOfShortVideos.current[j], listOfShortVideos.current[i]];
      }
    }

  return (
    <div className='grid grid-cols-3 gap-7 ' >
        <div className='my-auto mx-auto' >
        <button className={"bg-slate-300 font-semibold rounded-full py-4 px-10 text-black cursor-pointer hover:scale-110 transition-all " + (shortIndexToPlay===0?" pointer-events-none bg-slate-500 text-slate-400 ":"") } onClick={() => throttledShortNavigateClick(-1)} >Prev</button>
      </div>
      <div className='py-2 ' >
        { shortIndexToPlay >=0 && <iframe
          width="361"
          height="640"
          src={`https://www.youtube.com/embed/${listOfShortVideos.current[shortIndexToPlay]}?autoplay=1&loop=1&playlist=${listOfShortVideos.current[shortIndexToPlay]}`}
          title={listOfShortVideos.current[shortIndexToPlay]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>}
      </div>
      <div className='my-auto mx-auto' >
        <button className={"bg-slate-300 font-semibold rounded-full py-4 px-10 text-black cursor-pointer hover:scale-110 transition-all" + (shortIndexToPlay===listOfShortVideos.current.length-1?" pointer-events-none bg-slate-500 text-slate-400 ":"") } onClick={()=>throttledShortNavigateClick(1)}  >Next</button>
      </div>
    </div>
  )
}

export default ShortsContainer
