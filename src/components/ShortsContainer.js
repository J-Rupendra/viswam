import React, { useEffect, useRef, useState } from 'react'
import useCustomRouteGaurd from '../utils/custom_hooks/useCustomRouteGaurd'
import ShimmerShorts from './ShimmerShorts'

const ShortsContainer = () => {
    useCustomRouteGaurd()
    
    const listOfShortVideos = useRef([
        "bmscP5EI4Bo",
        "GcdtdwJD6H0",
        "KubJQ9a8XZA",
        "uFtnh3yH45s",
        "tq1vcm_6xrU",
        "FtgLCf91wMM",
        "S4SuqK6JTrY",
        "o0A4o4E5UPs",
        "jEAkpn_IdOs",
        "ySfGxHwGyDk",
        "Kp-qyruJ3js",
        "c1OBX0peEb0",
        "WhBXHIrCSSo",
        "BLnsZIeEDJI",
        "HEL-eYCdCac",
        "spLARRUIDbE",
        "Tkl0GqpQZ3s",
        "A3XQOGdKcF8",
        "OuY4DbVDLgQ",
        "Je22_wqFjig",
        "oV43sck10nQ",
        "HZ5xX4OTm48",
        "mgq-xEMsiI8"
    ]) 
    const [shortIndexToPlay, setShortIndexToPlay] = useState(-1)
    useEffect(()=>{
        shuffleShorts()
        setShortIndexToPlay(0)
    },[])


    function handleShortNavigateClick(flag){
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
        <button className={"bg-slate-300 font-semibold rounded-full py-4 px-10 text-black cursor-pointer hover:scale-110 transition-all " + (shortIndexToPlay===0?" pointer-events-none bg-slate-500 text-slate-400 ":"") } onClick={() => handleShortNavigateClick(-1)} >Prev</button>
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
        <button className={"bg-slate-300 font-semibold rounded-full py-4 px-10 text-black cursor-pointer hover:scale-110 transition-all" + (shortIndexToPlay===listOfShortVideos.current.length-1?" pointer-events-none bg-slate-500 text-slate-400 ":"") } onClick={()=>handleShortNavigateClick(1)}  >Next</button>
      </div>
    </div>
  )
}

export default ShortsContainer
